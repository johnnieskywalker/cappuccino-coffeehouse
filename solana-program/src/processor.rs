use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint::ProgramResult,
    msg,
    program::{invoke, invoke_signed},
    program_error::ProgramError,
    program_pack::{IsInitialized, Pack},
    pubkey::Pubkey,
    sysvar::{rent::Rent, Sysvar},
};

use spl_token::state::Account as TokenAccount;

// use crate::{error::CupProgramError, instruction::CappuccinoInstruction, state::CupProgram};
use crate::{instruction::CappuccinoInstruction};


pub struct Processor;
impl Processor {

    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        instruction_data: &[u8],
    ) -> ProgramResult {
        let instruction = CappuccinoInstruction::unpack(instruction_data)?;

        match instruction {
            CappuccinoInstruction::DepositSolForCup { amount } => {
                msg!("Instruction: DepositSolForCup");
                Self::deposit_sol_for_cup(accounts, amount, program_id)
            }
            CappuccinoInstruction::CheckCollaterals => {
                msg!("Instruction: CheckCollaterals: not implemented");
                Ok(())
            }
        }
    }

    fn deposit_sol_for_cup(
        accounts: &[AccountInfo],
        amount_sol: u64,
        program_id: &Pubkey,
    ) -> ProgramResult {

        const COLLATERAL_RATIO: f64 = 2.0; // 200% //TODO: move to account data

        let account_info_iter = &mut accounts.iter();

        // input data
        let client_account = next_account_info(account_info_iter)?;
        let client_cup_account = next_account_info(account_info_iter)?;
        let collateral_info_account = next_account_info(account_info_iter)?;
        let collateral_cup_account = next_account_info(account_info_iter)?;
        let rent = &Rent::from_account_info(next_account_info(account_info_iter)?)?;
        let token_program = next_account_info(account_info_iter)?;

        // initial validations
        if !client_account.is_signer {   // client must be the signer of deposit transaction
            msg!("Client must be a signer of a signer of transaction");
            return Err(ProgramError::MissingRequiredSignature);
        }

        if *collateral_info_account.owner != *program_id {  // program must own collateral account to make changes to its data
            msg!("Collateral info account must belong to program");
            return Err(ProgramError::IncorrectProgramId);
        }

        if *collateral_cup_account.owner != *program_id {  // program must own a CUP account used to distribute CUP to clients
            msg!("Cup account must belong to program");
            return Err(ProgramError::IncorrectProgramId);
        }

        // Transfer SOL from client to program
        let transfer_sol_to_program_ix = spl_token::instruction::transfer(
            token_program.key,
            client_account.key,
            collateral_cup_account.key,
            client_account.key, // TODO: here program is the signer
            &[&client_account.key],
            amount_sol,
        )?;
        //TODO: remove amount sol from log message as it it expensive op
        msg!("Calling the token program to transfer SOL tokens from client to collateral program sol amount = {}", amount_sol);
        invoke(
            &transfer_sol_to_program_ix,
                &[
                client_account.clone(),
                collateral_cup_account.clone(),
                token_program.clone(),
            ],
        )?;

        // Transfer CUP from program to client
        let client_collateralized_cup: u64 = (amount_sol as f64 / COLLATERAL_RATIO).round() as u64;
        msg!("Send {} cup to client", client_collateralized_cup);
        let transfer_cup_to_client_ix = spl_token::instruction::transfer(
            token_program.key,
            collateral_cup_account.key,
            client_cup_account.key,
            &pda,
            &[&pda],
            client_collateralized_cup,
        )?;
        msg!("Calling the token program to transfer tokens to the taker...");
        invoke_signed(
            &transfer_cup_to_client_ix,
                        &[
                pdas_temp_token_account.clone(),
                collateral_cup_account.clone(),
                client_cup_account.clone(),
                token_program.clone(),
            ],
                        &[&[&b"cup-collateral"[..], &[nonce]]],
        )?;

        Ok(())
    }

}
