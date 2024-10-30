import { assertTrue, assertFalse, assertEquals } from 'vitest'
import { Clarinet, Tx, Chain, Account, types } from 'clarinet'

Clarinet.test({
  name: "P2P Energy Trading Contract",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let seller = accounts.get('wallet_1')!
    let buyer = accounts.get('wallet_2')!
    
    // Test initiate-trade
    let p2pContracct = chain.getContract('p2p-energy-trading', seller.address)
    let tx = await Tx.invoke(p2pContracct, 'initiate-trade', [
      seller.address,
      buyer.address,
      types.uint(1000),
      types.uint(0.25)
    ])
    assertEquals(chain.getHeight(), tx.height)
    assertEquals(await p2pContracct.call('get-seller'), seller.address)
    assertEquals(await p2pContracct.call('get-buyer'), buyer.address)
    assertEquals(await p2pContracct.call('get-energy-amount'), types.uint(1000))
    assertEquals(await p2pContracct.call('get-price-per-unit'), types.uint(0.25))
    assertFalse(await p2pContracct.call('get-is-completed'))
    
    // Test complete-trade
    tx = await Tx.invoke(p2pContracct, 'complete-trade', [])
    assertEquals(chain.getHeight(), tx.height)
    assertTrue(await p2pContracct.call('get-is-completed'))
  }
})
