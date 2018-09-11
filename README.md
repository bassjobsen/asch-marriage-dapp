# Asch Marriage Dapp

Asch Dapp to demonstrate smart contacts on Asch. This Dapp creates smart contracts on the side chain as an example. Similair smart contracts for Ethereum can found at [Marriage_Ethereum](https://github.com/pabloruiz55/Marriage_Ethereum) and [My Marriage Information via the Ethereum Blockchain](https://hudsonjameson.com/ethereummarriage/). Now we can compare both solutions.

What are the pros and cons of smart contract and the side chain? And what are the difference between a smart contract on Ethereum and a smart contract on Asch?

## Install Asch first

```
# clone asch
git clone https://github.com/aschplatform/asch.git asch && cd asch && npm install && cd ..
```

## Install the source code
```
git clone https://github.com/bassjobsen/asch-marriage-dapp.git
```
After that navigate to the new `asch-marriage-dapp` folder and follow the instructions at [Dapp Development Tutorial 1: Asch Dapp Hello World](https://github.com/AschPlatform/asch-docs/blob/master/dapp/hello_world/en.md). Or simply run [asch-redeploy](https://github.com/AschPlatform/asch-redeploy):

```
> sudo npm -g install asch-redeploy
> cd asch-marriage-dapp
> asch-redeploy
```
# howto use the Marriage Dapp

## Install the Dapp
run:
```
> git clone github.com/bassjobsen/asch-marriage-dapp.git
```

```
> cd asch-marriage-dapp
```

```
> asch-redeploy
```

The above will give the output like that shown beneath:

```
[2018-09-08 11:43:52.345][INFO] DAPP registered, DappId: bdf0fb2f942d7b923d01ee99f1780bd563ffeca15322607d55a2a9030d76e0cd
[2018-09-08 11:43:52.347][INFO] DAPP name: test-fQLXSekIyrjN
```
Copy the DAPP name and pint your browser to:

```
http://localhost:4096/chains/test-fQLXSekIyrjN/
```

## create 2 new users

```
asch-cli crypto --generate
? Enter number of accounts to generate 2
[ { address: 'ANXpRtBpu23YtLwtNBidCw89pZ55pdSbVC',
    secret: 'market lobster female keen weasel like orphan when brain crack column robust',
    publicKey: '32266607439295a2d2f479200cf47b4cc931b27690b9b64dfed002730563e047' },
  { address: 'A8QqopXtWho1nh5hg3wkC5tPy1drdoSCnv',
    secret: 'identify cause guard ketchup leader aunt scatter orbit orient afraid grocery gadget',
    publicKey: 'ad97d147a73d0b665b351580864b11bfc0b1475178213d8f2e5a2716518ec182' } ]
Done
```

### give the users some money

```
> asch-cli sendmoney --to "ANXpRtBpu23YtLwtNBidCw89pZ55pdSbVC" --amount 100000000000 --secret "stone elephant caught wrong spend traffic success fetch inside blush virtual element"
```

```
> asch-cli sendmoney --to "A8QqopXtWho1nh5hg3wkC5tPy1drdoSCnv" --amount 100000000000 --secret "stone elephant caught wrong spend traffic success fetch inside blush virtual element"
```

### Let the users deposit some money to the Dapp

```
> asch-cli deposit --chain "test-fQLXSekIyrjN" --currency "XAS" --amount "5000000000" --secret "market lobster female keen weasel like orphan when brain crack column robust"
```
```
> asch-cli deposit --chain "test-fQLXSekIyrjN" --currency "XAS" --amount "5000000000" --secret "identify cause guard ketchup leader aunt scatter orbit orient afraid grocery gadget"
```

# Propose Marriage now

In your browser open the Dapp by using the `secret` of address `ANXpRtBpu23YtLwtNBidCw89pZ55pdSbVC` and propose address `A8QqopXtWho1nh5hg3wkC5tPy1drdoSCnv`

![proposal](https://raw.github.com/bassjobsen/asch-marriage-dapp/master/images/proposal.png)

By invoking the contrac you'll to a proposal to `A8QqopXtWho1nh5hg3wkC5tPy1drdoSCnv`. Now you can use a second browers window to accept the proposal and get married. By using the buttons in the Status part of the Dapp you can accept proposals, get married and also ask for a divorce.

![divorce](https://raw.github.com/bassjobsen/asch-marriage-dapp/master/images/divorce.png)