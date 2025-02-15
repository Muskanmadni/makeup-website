"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var dotenv_1 = require("dotenv");
var client_1 = require("@sanity/client");
(0, dotenv_1.config)();
exports.client = (0, client_1.createClient)({
    projectId: 'u0clzjji', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2025-01-18', // Today's date or latest API version
    token: 'skmMILSLN5T0sbV9iClh5qKgiQPhxbe6HmxCNzB0OODiafoEKTGuWXZM0Dt8RU2smH0ciXFtalqX0QxyE9McZ4LfHAcFeSLCd2JJjztKQJ9e79xHpC8w9puvzrJGQSTIxrgbIAiDDQ9LtCbNdzaORu7mjIlDR5Hmi9zubYViaS70KW3OnNv1',
    useCdn: false, // Disable CDN for real-time updates
});
