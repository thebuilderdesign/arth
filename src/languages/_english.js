export default {
  cdp_page: {
    liquidation_price: 'Liquidation price',
    // "liquidation_ratio": "Liquidation ratio",
    collateralization_ratio: 'Collateralization ratio',
    // "current_price_information": "Current price information",
    liquidation_penalty: 'Liquidation penalty',
    minimum_ratio: 'Minimum ratio',
    stability_fee: 'Stability fee',
    current_price_info: 'Current price information',
    position: 'position',
    // "collateral": "collateral",
    locked: 'Locked',
    // "required_for_safety": "Required for safety",
    able_withdraw: 'Able to withdraw',
    available_generate: 'Available to generate',
    // "outstanding_debt": "Outstanding debt",
    // "wallet_balance": "wallet balance",
    tx_history: 'Vault history',
    outstanding_dai_debt: 'Outstanding ARTH debt',
    not_applicable: 'N/A'
  },
  landing_page: {
    headline: 'Introducing ARTH. The world\'s first valuecoin.',
    trade_card: {
      title: 'Trade',
      description:
        "Place orders in the Marketplace, or simply exchange your tokens instantly for what's available.",
      button: 'Start Trading'
    },
    borrow_card: {
      title: 'Borrow',
      description:
        'Lock your tokens as collateral to generate $ARTH, a decentralized stablecoin.',
      button: 'Borrow $ARTH'
    },
    save_card: {
      title: 'Save',
      description:
        'Earn savings on your $ARTH by locking it into ArthSavings. Automatic and non-custodial.',
      button: 'Save $DAI'
    },
    token_section_title: '$ARTH is a stablecoin backed by the following collaterals',
    token_section_only_on_trade: '* Only available on MahaDAO DEX',
    section1_title: 'What is $ARTH?',
    section1_p:
      '$ARTH is a algorithimatic stablecoin that is uncorrelated to the US Dollar. $ARTH is governed by MahaDAO and is price pegged to the GMU (Global Measurement Unit) ',
    section2_title: 'What is the GMU?',
    section2_p:
      'The Global Measurement Unit (GMU) is a buying power metric that is meant to be independent from the dollar. $ARTH uses the GMU to calculate the real value of all assets minus inflation.',
    section3_title: 'How can I create ARTH?',
    section3_p:
      'Through this alpha platform, you can lock in tokens on the Matic Mumbai testnet and lock those tokens to create ARTH. Instructions to do so are given in the Borrow section of this DApp',
    questions_title: 'Questions',
    question1: 'What is $DAI?',
    answer1:
      'DAI is a decentralized application that runs on the Ethereum blockchain. Anyone can use DAI to trade tokens, borrow against them, and earn savings using DAI.',
    question2: 'What is $DAI?',
    answer2:
      '$DAI is the world’s first unbiased currency and leading decentralized stablecoin soft-pegged to the US Dollar. Learn more about DAI {0}.',
    answer2_link1_url: 'https://makerdao.com/en/',
    answer2_link1_text: 'here',
    question3: 'Do I need an account?',
    answer3:
      'You do not need an account to use $DAI. However, you will need a Matic wallet. DAI supports most Ethereum browser wallets such as {0}, {1}, etc.',
    answer3_link1_url: 'https://metamask.io/',
    answer3_link1_text: 'Metamask',
    answer3_link2_url: 'https://wallet.coinbase.com/',
    answer3_link2_text: 'Coinbase Wallet',
    question5: 'Is $DAI secure?',
    answer5:
      'The $DAI code is {0}, giving the community the ability to pressure test and audit the core technology.',
    answer5_link1_url: 'https://github.com/ARTHDEX',
    answer5_link1_text: 'open-source',
    question6: 'Will I be charged a fee to use $DAI?',
    answer6:
      '$DAI is free to use and trade. However, you will have to pay gas and other fees associated with the Maker Protocol, such as stability fees.',
    question7: 'How can I contact the DAI team?',
    answer7: 'You can reach the DAI team by contacting us on {0}.',
    answer7_link1_url: 'https://chat.makerdao.com',
    answer7_link1_text: 'chat',
    question8:
      'Can I buy Bitcoin or Ethereum on DAI using a credit card or via my bank account?',
    answer8:
      'You cannot buy crypto from your bank account using DAI. Instead, you can use DAI to buy Ethereum and other supported tokens.',
    read_only: 'Read-Only',
    wallet_connect: 'Wallet Connect',
    wallet_link: 'Coinbase Wallet'
  },
  overview_page: {
    title: 'Overview',
    your_cdps: 'Your Vaults',
    token: 'TOKEN',
    id: 'VAULT ID',
    ratio: 'CURRENT RATIO',
    ratio_mobile: 'Ratio',
    deposited: 'DEPOSITED',
    withdraw: 'AVAIL. TO WITHDRAW',
    debt: 'ARTH',
    view_cdp: 'Manage Vault',
    view_cdp_mobile: 'Manage',
    total_collateral_locked: 'total collateral locked in ARTH',
    total_dai_debt: 'total ARTH debt',
    get_started_title: 'Open your first Vault to start generating ARTH.',
    select_another_wallet: 'Select another wallet',
    connect_ledgers_choice: 'Connect {0} or {1}',
    no_vaults: 'Address {0} has no Vaults.',
    vault_unavailable: 'Sorry, this vault is unavailable',
    loading_vaults: 'Loading Vaults...'
  },
  navbar: {
    save: 'Save',
    borrow: 'Borrow',
    trade: 'Trade',
    privacy: 'Privacy',
    terms: 'Terms'
  },
  sidebar: {
    wallet_balances: 'Wallet Balances',
    // "read_only_mode": "Read-Only Mode",
    price_feeds: 'Price Feeds',
    system_info: 'System Info',
    active_cdps: 'ACTIVE VAULTS',
    active_cdps_figure: '{0} Vaults',
    global_debt_ceiling: 'GLOBAL DEBT CEILING',
    current_debt: 'CURRENT DEBT',
    base_rate: 'BASE RATE',
    // "number_of_liquidations": "NUMBER OF LIQUIDATIONS",
    buy_and_burn_lot_size: 'BUY & BURN LOT SIZE',
    inflate_and_sell_lot_size: 'INFLATE & SELL LOT SIZE',
    system_collateralization: 'COLLATERALIZATION',
    view_price_feeds: 'View price feeds',
    view_mkr_tools: 'View mkr.tools',
    view_more: 'View more',
    view_less: 'View less',
    asset: 'ASSET',
    balance: 'BALANCE',
    usd: 'GMU Value ($)',
    send: 'SEND',
    migrate: 'UPGRADE',
    no_wallet: 'Not connected',
    save_details: {
      title: 'Save Details',
      total_savings_dai: 'Total ARTH in DSR',
      total_dai_supply: 'Total ARTH Supply',
      dai_savings_rate: 'ARTH Savings Rate'
    }
  },
  cdp_create: {
    screen_titles: {
      select_collateral: 'Select Collateral',
      vault_management: 'Vault Management',
      generate_dai: 'Generate ARTH',
      confirmation: 'Confirmation'
    },
    set_allowance: 'Set Allowance',
    seconds_wait_time: 'seconds',
    minutes_wait_time_singular: 'minute',
    minutes_wait_time_plural: 'minutes',
    tx_hash: 'Transaction hash',
    view_tx_details: 'View transaction details',
    select_title: 'Select a collateral type',
    select_text:
      'Each collateral type has its own risk parameters. You can lock up additional collateral types later.',

    setup_proxy_title: 'Vault Setup and Management',
    setup_proxy_proxy_text:
      'Configure your Vault for easy management. This only has to be done once.',
    setup_proxy_allowance_text:
      'This permission allows ARTH CDP Portal to interact with your {0}. This has to be done once for each new collateral type.',
    setup_proxy_proxy_button: 'Setup',
    setup_proxy_allowance_button: 'Set',
    setup_vault: 'Setup Vault',

    deposit_title: 'Deposit {0} and Generate ARTH',
    deposit_text:
      'Different collateral types have different risk parameters and collateralization ratios.',
    // "deposit_sidebar_title": "{0} Risk Parameters",
    deposit_form_field1_title:
      'How much {0} would you like to lock in your Vault?',
    deposit_form_field1_text:
      'The amount of {0} you lock up determines how much ARTH you can generate.',
    // "deposit_form_field2_title": "What target collateralization ratio would you like to stay above?",
    // "deposit_form_field2_text": "If your Vault drops below this target it will be considered {0} risk.",
    // "deposit_form_field2_after": "Suggested:",
    deposit_form_field3_title: 'How much ARTH would you like to generate?',
    deposit_form_field3_text:
      'Generate an amount that is safely above the liquidation ratio.',
    // "deposit_form_field3_after1": "Max at target ratio",
    deposit_form_field3_after2: 'Max avail to generate',

    confirm_title: 'Confirm Vault Details',
    confirmed_title: 'Your Vault is being created',
    confirmed_text:
      'The estimated time is {0}. You can safely leave this page.',
    post_confirmed_title: 'Your Vault has been created',
    post_confirmed_text: 'You can safely leave this page.',
    insufficient_ilk_balance: 'Insufficient {0} balance',
    has_understood_stability_fee:
      'I understand the Stability Fee is not fixed and is likely to change over time',
    collateralization_warning:
      'The amount of ARTH you are generating is putting your Vault at risk of liquidation',
    draw_too_much_dai: 'Vault below liquidation threshold',
    below_dust_limit: 'A Vault requires a minimum of {0} ARTH to be generated',
    dust_max_payback:
      'You can repay all your outstanding debt, or a maximum of {0} ARTH',
    stability_fee_description:
      'The fee calculated based on the outstanding debt of your Vault. This is continuously added to your existing debt.',
    liquidation_ratio_description:
      'The collateral-to-ARTH ratio at which the Vault becomes vulnerable to liquidation.',
    liquidation_penalty_description:
      'The fee that is added to the total outstanding ARTH debt when a liquidation occurs.',
    waiting_for_comfirmations: 'Waiting for confirmations... {0} of {1}',
    confirmed_with_confirmations: 'Confirmed with {0} confirmations',
    waiting_for_confirmations_info:
      "Waiting for confirmations reduces the risk of your Vault address changing. We require users to wait 10 block confirmations to ensure it's been created successfully. This will often take around 2 minutes.",
    proxy_failure_not_mined: 'This transaction is taking longer than usual...',
    proxy_failure_not_mined_info:
      'Transactions to the network may sometimes take longer than expected. This can be for a variety of reasons but may be due to a congested network or a transaction sent with a low gas price. Some wallets enable users to resend a transaction with a higher gas price, otherwise check for your transaction on etherscan and come back again later.',
    proxy_failure_contract_data: 'There was an error with your Ledger wallet...',
    proxy_failure_contract_data_info:
      'If you see this message and are using a Ledger hardware wallet, it often means that you need to enable "Contract Data." To do this, go to your Ethereum app on Ledger, choose Settings and then Contract Data.',
    proxy_failure_rejected: 'The transaction has been rejected on the wallet',
    proxy_failure_timeout: 'Your transaction timed out and was automatically rejected',
    proxy_failure_timeout_info: 'This error is often caused because you did not sign the transaction in a reasonable time, and it has been automatically rejected by the wallet. Where this has happened, you often still need to reject the transaction yourself on the wallet to allow you to sign another.',
  },
  cdp_migrate: {
    select_title: 'Select Vault to Migrate',
    select_text:
      'Select a Vault and pay back the stability fee in ARTH or MAHA to migrate it to Multi-collateral ARTH and the new CDP Portal.',
    current_ratio: 'Current Ratio',
    dai_debt: 'ARTH debt',
    fee_in_dai: 'Fee in ARTH',
    fee_in_mkr: 'Fee in MAHA',
    migrate: 'Migrate',
    payment: 'Payment',
    trust_site_with_dai: 'Trust this site with my ARTH',
    pay_and_migrate: 'Pay and Migrate',
    migrate_in_progress_header: 'Your CDP is being migrated',
    migrate_in_progress_text:
      'The estimated time is 8 minutes. You can safely leave this page and return.',
    migrate_complete_header: 'CDP Migration complete',
    migrate_complete_text:
      'CDP #{0} has been successfully migrated to Multi-collateral ARTH and the new CDP Portal.',
    view_transaction_details: 'View transaction details',
    migrate_another_cdp: 'Migrate another CDP',
    exit_to_cdp_portal: 'Exit to CDP Portal'
  },
  dsr_deposit: {
    screen_titles: {
      open_vault: 'Manage Proxy',
      deposit_dai: 'Deposit ARTH',
      confirmation: 'Confirmation'
    },
    setup_header: 'Deploy Proxy',
    open_vault: 'Earn savings on your ARTH by locking into ARTH Save',
    deposit_form_title: 'Enter the amount you would like to deposit.',
    setup_proxy_text:
      'Setting up your proxy will bundle multiple transactions into one, saving transaction time and gas costs. This only has to be done once.',
    confirm_title: 'Confirm Deposit'
    // "post_confirm_title": "Deposit Confirmed"
  },
  actions: {
    back: 'Back',
    continue: 'Continue',
    create_cdp: 'Open Vault',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    pay_back: 'Pay back',
    generate: 'Generate',
    send: 'Send',
    skip: 'Skip',
    get_started: 'Get Started',
    try_again: 'Try Again'
  },
  actions_past_tense: {
    deposit: 'Deposited',
    withdraw: 'Withdrew',
    pay_back: 'Paid back',
    generate: 'Generated'
  },
  event_history: {
    open: 'Opened a new Vault with id #{0}',
    deposit: 'Deposited {0} {1} into Vault',
    dsr_deposit: 'Deposited {0} ARTH',
    withdraw: 'Withdrew {0} {1} from Vault',
    dsr_withdraw: 'Withdrew {0} ARTH',
    generate: 'Generated {0} new ARTH from Vault',
    pay_back: 'Repaid {0} ARTH to Vault',
    give: 'Vault given to {0} by {1}',
    migrate: 'Vault upgraded from SCD'
  },
  action_sidebar: {
    deposit_title: 'Deposit {0}',
    deposit_description: 'How much {0} would you like to deposit?',
    withdraw_title: 'Withdraw {0}',
    withdraw_description: 'How much {0} would you like to withdraw?',
    withdraw_warning:
      'The amount of collateral you are withdrawing puts your Vault at risk of liquidation',
    generate_title: 'Generate ARTH',
    generate_description: 'How much ARTH would you like to generate?',
    generate_warning:
      'The amount of ARTH you are generating puts your Vault at risk of liquidation',
    payback_title: 'Pay Back ARTH',
    payback_description: 'How much ARTH would you like to pay back?',
    cdp_below_threshold: 'Vault below liquidation threshold',
    insufficient_balance: 'Insufficient {0} balance',
    cannot_payback_more_than_owed: 'Cannot pay back more than owed',
    dai_balance: 'Your ARTH balance',
    dai_debt: 'ARTH debt',
    locked_dsr: 'Locked in DSR',
    unlock_token: 'Unlock {0} to continue',
    unlocking_token: 'Unlocking {0}...',
    token_unlocked: '{0} unlocked',
    maximum_available_to_generate: 'Maximum available to generate',
    maximum_available_to_withdraw: 'Maximum available to withdraw',
    current_account_balance: 'Current account balance',
    gem_usd_price_feed: '{0}/ARTH Price feed',
    new_liquidation_price: 'New liquidation price',
    new_collateralization_ratio: 'New collateralization ratio',
    create_proxy: 'Create Proxy to continue',
    creating_proxy: 'Creating Proxy...',
    proxy_created: 'Proxy Created',
    send_title: 'Send {0}',
    send_description: 'How much {0} would you like to send?',
    your_balance: 'Your Balance',
    dest_address: 'Destination Address',
    invalid_input: 'This input is invalid',
    invalid_min_amount: 'Can only send a positive amount of {0}',
    invalid_max_amount: 'Amount is greater than your balance',
    invalid_min_gas: 'Balance is below the required tx fee: {0}',
    invalid_max_gas: 'Balance is below the Amount + tx fee: {0}',
    invalid_address: 'This is not a valid address',
    invalid_allowance: 'Amount is higher than your allowance for {0}'
  },
  save: {
    title: 'Savings',
    dai_savings_rate: 'ARTH Savings rate',
    description:
      'Receive savings on your ARTH. Deposit or withdraw at any time.',
    deposit_amount: 'Deposit amount',
    withdraw_amount: 'Withdraw amount',
    deposit_dai: 'Deposit ARTH',
    deposit_dai_subheading:
      'Start earning as soon as your deposit is confirmed.',
    get_started_title: 'Start earning {0} on your ARTH today',
    start_earning:
      'Deposit ARTH to see your first transaction and start earning',
    tx_history: 'History',
    savings_earned_to_date: 'Savings earned to date',
    estimated_savings: 'Estimated savings',
    dai_locked_dsr: 'ARTH locked in ASR',
    deposit_withdraw: 'Deposit and withdraw',
    deposit_btn_cta: 'Receive savings on your ARTH. Deposit at any time',
    withdraw_btn_cta: 'Safely withdraw your ARTH at any time',
    no_savings:
      "This address either doesn't exist or has no DSR account history"
  },
  verbs: {
    depositing: 'Depositing',
    generating: 'Generating',
    withdrawing: 'Withdrawing',
    paying_back: 'Paying back'
  },
  table: {
    type: 'Type',
    activity: 'Activity',
    date: 'Date',
    time: 'Time',
    sender_id: 'Sender ID',
    tx_hash: 'Tx Hash',
    loading: 'Loading...'
  },
  transactions: {
    unlocking_token: 'Unlocking {0}',
    setting_up_proxy: 'Setting up proxy',
    creating_cdp: 'Creating Vault',
    generate_dai: 'Generating {0} ARTH',
    pay_back_dai: 'Paying back {0} ARTH',
    withdrawing_gem: 'Withdrawing {0}',
    depositing_gem: 'Depositing {0}',
    claiming_collateral: 'Claiming collateral',
    send: 'Sending {0} to {1}'
  },
  transactions_past_tense: {
    unlocking_token: 'Unlocked {0}',
    setting_up_proxy: 'Set up proxy',
    creating_cdp: 'Created Vault',
    generate_dai: 'Generated {0} ARTH',
    pay_back_dai: 'Paid back {0} ARTH',
    withdrawing_gem: 'Withdrew {0}',
    depositing_gem: 'Deposited {0}',
    claiming_collateral: 'Claimed collateral',
    send: 'Sent {0} to {1}'
  },
  transaction_manager: {
    transaction_singular_capitalised: 'Transaction',
    transaction_plural_capitalised: 'Transactions',
    transaction_singular: 'transaction',
    transaction_plural: 'transactions',
    show: 'Show',
    hide: 'Hide'
  },
  input_validations: {
    max_float: 'Amount must be less than {0}',
    min_float: 'Amount must be greater than {0}',
    is_float: 'Please enter a valid number',
    default: 'Please enter a valid input'
  },
  connect: 'Connect',
  disconnect: 'Disconnect',
  view: 'View',
  dismiss: 'Dismiss',
  exit: 'Exit',
  close: 'Close',
  connect_to: 'Connect to {0}',
  overview: 'Overview',
  cdp_type: 'Vault Type',
  not_found: 'Not Found',
  // "network": "Network",
  // "unknown": "Unknown",
  cdp: 'Vault',
  cdp_id: 'Vault ID',
  // "connect": "Connect",
  set_max: 'Set max',
  paste: 'Paste',
  cancel: 'Cancel',
  current_price: 'Current Price',
  stability_fee: 'Stability Fee',
  liquidation_penalty: 'Liquidation Fee',
  collateral_debt_ceiling: 'Debt ceiling',
  dai_available: 'ARTH Available',
  returned_auction: 'returned from the auction',
  liquidated_event: 'Your Vault has been liquidated',
  liquidation_ratio: 'Liquidation Ratio',
  liquidation_price: 'Your Liquidation Price',
  liquidation_penalty_shortened: 'Liq Fee',
  liquidation_ratio_shortened: 'Liq ratio',
  // "liquidation_price_shortened": "Liq Price",
  collateral_type: 'Collateral Type',
  collateralization: 'Your Collateralization Ratio',
  collateralization_ratio: 'Collateralization ratio',
  current_ilk_price: 'Current {0} Price',
  your_balance: 'Your balance',
  why_is_this: 'Why is this?',
  // "risk_parameters": "Risk Parameters",
  terms_of_service_text: 'I have read and accept the {0}',
  terms_of_service: 'Terms of Service',
  cookie_notice: 'By using this website you agree to our {0}',
  privacy_policy: 'privacy policy',
  providers: {
    connect_wallet: 'Connect a wallet to get started',
    metamask: 'MetaMask',
    trust: 'Trust',
    coinbase: 'Coinbase Wallet',
    imtoken: 'ImToken',
    alphawallet: 'Alpha Wallet',
    ledger_nano: 'Ledger Nano',
    trezor: 'Trezor',
    other: 'Active Wallet',
    ledger: 'Ledger',
    walletconnect: 'Wallet Connect',
    walletlink: 'Coinbase Wallet'
  },
  notifications: {
    claim: 'Claim',
    claim_collateral:
      'Your {0} Vault auction(s) have completed. You have {1} {2} to claim',
    non_vault_owner:
      'The owner of this position ({0}) does not match the connected walleted address',
    non_overview_owner:
      'You are currently viewing the Overview of another address ({0})',
    non_savings_owner:
      'You are currently viewing the savings of another address ({0})'
  }
};
