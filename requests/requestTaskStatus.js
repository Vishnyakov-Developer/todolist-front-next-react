"use client"

import axios from "axios";
import { config } from "./config";

export default async function (data = { taskId, taskStatus }) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: config.url + '/api/task_status',
      data,
      headers: {
        initdata: config.getInitData()
      }
    }).then(response => {
      resolve(response.data?.message || response?.data)
    }).catch(error => {
      reject(error?.response?.data?.message || error?.response?.data || error)
    })
  })
}