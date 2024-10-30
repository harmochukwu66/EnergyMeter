import { assertTrue, assertFalse, assertEquals } from 'vitest'
import { Clarinet, Tx, Chain, Account, types } from 'clarinet'

Clarinet.test({
  name: "Energy Meter Contract",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let owner = accounts.get('deployer')!
    
    // Test record-energy-generation
    let energyMeterContract = chain.getContract('energy-meter', owner.address)
    let tx = await Tx.invoke(energyMeterContract, 'record-energy-generation', [types.uint(1000)])
    assertEquals(chain.getHeight(), tx.height)
    assertEquals(await energyMeterContract.call('get-total-energy-generated'), types.uint(1000))
    
    // Test record-energy-sale
    tx = await Tx.invoke(energyMeterContract, 'record-energy-sale', [types.uint(500)])
    assertEquals(chain.getHeight(), tx.height)
    assertEquals(await energyMeterContract.call('get-total-energy-sold'), types.uint(500))
  }
})
