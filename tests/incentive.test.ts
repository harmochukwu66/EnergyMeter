import { assertTrue, assertFalse, assertEquals } from 'vitest'
import { Clarinet, Tx, Chain, Account, types } from 'clarinet'

Clarinet.test({
  name: "Incentives Contract",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let user = accounts.get('wallet_1')!
    
    // Test record-energy-generation
    let incentivesContract = chain.getContract('incentives', user.address)
    let tx = await Tx.invoke(incentivesContract, 'record-energy-generation', [
      types.uint(1000),
      types.uint(80)
    ])
    assertEquals(chain.getHeight(), tx.height)
    assertEquals(await incentivesContract.call('get-energy-generated'), types.uint(1000))
    assertEquals(await incentivesContract.call('get-renewable-percentage'), types.uint(80))
    assertEquals(await incentivesContract.call('get-total-incentives-earned'), types.uint(200))
  }
})
