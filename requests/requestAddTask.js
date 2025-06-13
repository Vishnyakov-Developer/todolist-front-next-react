"use client"

import axios from "axios";
import { config } from "./config";

export default async function (data = { taskName, taskDetails, projectId, taskPriority }) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: config.url + '/api/add_task',
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