# Peer-to-Peer Energy Trading Platform

This project provides a set of Clarity smart contracts for a peer-to-peer energy trading platform. The key features include:

- Energy metering and tracking
- Secure peer-to-peer energy trading
- Incentives for sustainable energy usage

## Contracts

The platform consists of the following Clarity smart contracts:

1. **Energy Meter Contract**:
    - Tracks total energy generated and sold by each user
    - Provides methods to record energy generation and sales

2. **P2P Energy Trading Contract**:
    - Facilitates the negotiation, initiation, and completion of energy trades
    - Records trade details including seller, buyer, energy amount, and price

3. **Incentives Contract**:
    - Calculates and tracks incentives earned by users based on renewable energy generation
    - Provides methods to record energy generation and renewable energy percentage

## Testing

The project includes a suite of unit tests for the smart contracts, implemented using the Vitest testing framework. The tests cover the core functionality of each contract.

To run the tests, use the following command:

```
vitest
```

## Future Improvements

- Add support for advanced pricing models (e.g., dynamic pricing, time-of-use pricing)
- Implement a decentralized user registration and identity management system
- Integrate with external oracles for real-time energy pricing and availability data
- Develop a front-end application to provide a user-friendly interface for the platform

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or feature requests, please open an issue or submit a pull request.
