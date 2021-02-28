use solana_program::{
    program_error::ProgramError,
    msg
};
use std::convert::TryInto;
use std::str::from_utf8;

// use crate::error::CupProgramError::InvalidInstruction;

pub enum CappuccinoInstruction {

    /// Deposits SOL tokens as collateral and return CUP tokens
    /// Accounts expected:
    /// 0. `[signer]` The account of the person depositing SOL for CUP
    /// 1. `[]` The client's CUP token account for the token he will receive for SOL
    /// 2. `[writable]` The collateral info account, it holds all info about existing collaterals.
    /// 3. `[writable]` The CUP program account, it holds CUP tokens which program is transferring to the user for his SOL tokens.
    /// 4. `[]` The rent sysvar  //TODO: ???
    /// 5. `[]` The token program
    DepositSolForCup {
    ///number of SOL coins to transfer
        amount: u64,
    },
    ///  Check existing collateral positions and liquidate if necessary
    ///
    ///
    /// Accounts expected:
    /// TODO
    CheckCollaterals,
}

impl CappuccinoInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (tag, rest) = input.split_first().ok_or(ProgramError::InvalidArgument)?;

        Ok(match tag {
            0 => Self::DepositSolForCup {
                amount: Self::unpack_amount(rest)?,
            },
            1 => Self::CheckCollaterals,
            _ => return Err(ProgramError::InvalidArgument.into()),
        })
    }

    fn unpack_amount(input: &[u8]) -> Result<u64, ProgramError> {
        let amount = input
            .get(..8)
            .and_then(|slice| slice.try_into().ok())
            .map(u64::from_le_bytes)
            // .ok_or(InvalidInstruction)?; //TODO: declare own errors
            .ok_or(ProgramError::InvalidArgument)?;
        Ok(amount)
    }
}
