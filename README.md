# TeleSign SMS Integration

This Node.js application demonstrates the integration of the TeleSign SMS service to send messages.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js
- NPM
- TeleSign account credentials (Customer ID and API Key)

### Installing

1. Clone the repository to your local machine.
2. Run `npm install` to install the required packages.

### Setup

Create a `.env` file in the root directory of the project with the following contents:

```
CUSTOMER_ID=your_customer_id_here
API_KEY=your_api_key_here
PHONE_NUMBER=your_test_phone_number_here
```

Replace `your_customer_id_here`, `your_api_key_here`, and `your_test_phone_number_here` with your actual TeleSign Customer ID, API Key, and a test phone number.

### Usage

Run the application:

```
node index.js
```

This will send a test SMS message to the specified phone number.

## Built With

- [Node.js](https://nodejs.org/) - The JavaScript runtime used
- [TeleSign SDK](https://www.telesign.com/) - Telecommunications service

## Authors

- **Adanjz**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.