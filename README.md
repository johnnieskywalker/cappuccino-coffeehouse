[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/johnnieskywalker/cappuccino-coffeehouse)

# Cappuccino Coffeehouse

This project is for the blockchain application Cappuccino Coffeehouse. It contains code for the PROGRAM, web-based dapp and NodeJS server. 

### Blockchain program is Cappucino Machine.

Fellow blockchain traveller you entered a coffeehouse in which you can deposit your SOL tokens into cup of coffee no vaults here.
After depositing SOL you will be able to see it shining inside cup, in return you will be able to borrow CAPPUCINO STABLECOINS.
Cappuccino STABLECOINS are pegged not to a price of any fiat currency but to a price of cappuccino in NY from Numbeo API.
So this is trustless stablecoin which warranties you will be able to buy cappuccino coffee - a Proff of Coffee and Milk.
You can borrow as much Cappuccino as much cappuccino coffees you could buy in New York minus collateral ratio.
When you will keep your collateral ratio you will be able to give back your Cappuccino into a cup and take back your deposited SOL.
So if price of SOL will go up you will be able to borrow more CAP tokens, or give them back to cup and receive deposited SOL.
If the price of SOL would drop for some reasons so you deposit will be worth less then your CAP + c-ratio, you won't be able to take back deposited SOL.
Program will take it, however you will still be able to enjoy your CAPPUCINO!



# Pre-requisites

In order to develop and build "Cappuccino Coffeehouse," the following pre-requisites must be installed:

* [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE for editing Javascript)
* [NodeJS](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (DappStarter uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces))
* [Solana CLI Tools](https://docs.solana.com/cli/install-solana-cli-tools)
* Rust (see "Dependency Guides" at the end for help installing) 

### Dependency Checklist 
```bash
$ node --version
$ npm --version
$ rustup --version
$ rustc --version
$ cargo --version
$ solana --version
```

# Installation

Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn` This will fetch all required dependencies. The process will take 1-3 minutes and while it is in progress you can move on to the next step.

# Yarn Errors

You might see failures related to the `node-gyp` package when Yarn installs dependencies.
These failures occur because the node-gyp package requires certain additional build tools
to be installed on your computer. Follow the [instructions](https://www.npmjs.com/package/node-gyp) for adding build tools and then try running `yarn` again.

# Build, Deploy and Test
Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn start` This will run all the dev scripts in each project package.json.

The first time you run `yarn start` there are a fair number of Rust libraries that are
downloaded and pre-compiled. As a result, it may be take from 5-10 mins. before the
dapp is compiled and launched the first time. On subsequent compilations, the build
time will only be a few seconds.

## File Locations
Here are the locations of some important files:
* Program Code: [packages/dapplib/programs/src/lib.rs](packages/dapplib/programs/src/lib.rs)
* Dapp Library: [packages/dapplib/src/lib/dapp-lib.js](packages/dapplib/src/lib/dapp-lib.js)
* Solana Wrapper: [packages/dapplib/src/lib/solana.js](packages/dapplib/src/lib/solana.js) 
* Blockchain Interactions: [packages/dapplib/src/lib/blockchain.js](packages/dapplib/src/lib/blockchain.js)
* Data Layouts: [packages/dapplib/src/scripts/layouts.js](packages/dapplib/src/scripts/layouts.js)
* Migration Script: [packages/dapplib/src/scripts/migrate.js](packages/dapplib/src/scripts/migrate.js)

To view your dapp, open your browser to http://localhost:5000 for the DappStarter Workspace.

### Created using DappStarter
We ♥️ developers and want you to have an awesome experience. You should be experiencing Dappiness at this point. If not, let us know and we will help. Visit [https://support.decentology.com](https://support.decentology.com) or hit us up on Twitter @decentology.

## Dependency Guides

This section contains installation guides for common dev environments. 

### Rust

(Source: Solana)
We suggest that you install Rust using the 'rustup' tool. Rustup will install
the latest version of Rust, Cargo, and the other binaries.

Follow the instructions at [Installing Rust](https://www.rust-lang.org/tools/install).

For Mac users, Homebrew is also an option.  The Mac Homebrew command is `brew install rustup` and then
`rustup-init`. See [Mac Setup](https://sourabhbajaj.com/mac-setup/Rust/) &
[Installing Rust](https://www.rust-lang.org/tools/install) for more details.

After installation, you should have `rustc`, `cargo`, & `rustup`. You should
also have `~/.cargo/bin` in your PATH environment variable.

