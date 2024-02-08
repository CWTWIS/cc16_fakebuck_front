import axios from "axios";

export const requestFriend = (targetUserId) =>
  axios.post(`/relationships/users/${targetUserId}`);

export const confirmRequest = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/confirm`);

export const rejectRequest = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/reject`);

export const cancelRequest = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/cancel`);

export const unfriend = (targetUserId) =>
  axios.patch(`/relationships/users/${targetUserId}/unfriend`);
