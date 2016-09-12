'use strict';

module.exports = {
	activeDelegates: 51,
	addressLength: 208,
	blockHeaderLength: 248,
	confirmationLength: 80,
	epochTime: new Date(Date.UTC(2016, 09, 09, 12, 0, 0, 0)),
	fees:{
		send: 10000000,
		vote: 100000000,
		secondsignature: 500000000,
		delegate: 50000000000,
		multisignature: 500000000,
		dapp: 2000000000
	},
	feeStart: 1,
	feeStartVolume: 10000 * 100000000,
	fixedPoint : Math.pow(10, 8),
	forgingTimeOut: 500, // 50 blocks
	maxAddressesLength: 208 * 128,
	maxAmount: 100000000,
	maxClientConnections: 100,
	maxConfirmations : 77 * 100,
	maxPayloadLength: 1024 * 1024,
	maxRequests: 10000 * 12,
	maxSignaturesLength: 196 * 256,
	maxTxsPerBlock: 25,
	numberLength: 100000000,
	requestLength: 104,
	rewards: {
		offset: 10,   // Start rewards at block (n)
		distance: 3000000, // Distance between each milestone
	},
	signatureLength: 196,
	totalAmount: 10000000000000000, //
	unconfirmedTransactionTimeOut: 10800, // 1080 blocks
	voteExceptions: [
	]
};
