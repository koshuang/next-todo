import 'isomorphic-unfetch';
import { stringify } from 'query-string';

import { HttpModel } from '@Interfaces';

/**
 * @module Http
 */
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const BaseUrl = `${API_URL}/api`;

export const Http = {
  request: async <A>(
    methodType: string,
    url: string,
    params?: HttpModel.IRequestQueryPayload,
    payload?: HttpModel.IRequestPayload,
  ): Promise<A> => {
    return new Promise((resolve, reject) => {
      const query = params ? `?${stringify({ ...params, api_key: API_KEY })}` : '';

      fetch(`${BaseUrl}${url}${query}`, {
        body: JSON.stringify(payload),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${API_KEY}`,
        },
        method: `${methodType}`
      })
        .then(async response => {
          switch (response.status) {
            case 200:
              return response.json().then(resolve);
            default:
              return reject(response);
          }
        })
        .catch(e => {
          reject(e)
        });
    });
  },
};
