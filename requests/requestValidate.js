"use client"
import axios from "axios";
import { config } from "./config";

export default async function ({ initData }) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: config.url + '/api/validate',
      data: {
      },
      headers: {
        initdata: initData
      }
    }).then(response => {
      if (typeof localStorage !== 'undefined') {
        globalThis.localStorage.setItem('__initdata', initData)
      }
      resolve(response.data)
    }).catch(error => {
      resolve(error)
    })
  })
}