"use client"

import axios from "axios";
import { config } from "./config";


export default async function (data = { projectId }) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: config.url + '/api/get_tasks',
      data,
      headers: {
        initdata: config.getInitData()
      }
    }).then(response => {
      resolve(response.data?.tasks || response?.data)
    }).catch(error => {
      reject(error?.response?.data?.message || error?.response?.data || error)
    })
  })
}