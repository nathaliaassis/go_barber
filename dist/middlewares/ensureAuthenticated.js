"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = __importDefault(require("../config/auth"));
function ensureAuthenticated(request, response, next) {
  //jwt token validation
  var authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new Error('JWT token is missing');
  }
  var _a = authHeader.split(' '), token = _a[1];
  try {
    var decoded = jsonwebtoken_1.verify(token, auth_1.default.jwt.secret);
    console.log(decoded);
    var sub = decoded.sub; // here i'm enforcing that decodes is a tokenPayload Type
    request.user = {
      id: sub,
    };
    return next();
  }
  catch (_b) {
    throw new Error('Invalid JWT token');
  }
}
exports.default = ensureAuthenticated;
