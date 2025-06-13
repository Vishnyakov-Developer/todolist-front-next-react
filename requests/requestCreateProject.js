"use client"

import axios from "axios";
import { config } from "./config";

export default async function (data = { projectName, projectDetails }) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: config.url + '/api/create_project',
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