import axios from 'axios';
import config from '../../config';

const graphApi = axios.create({
  baseURL: config.GRAPH_API_HOST,
});

export async function listNodes() {
  return graphApi.get(`/api/v1/graph/nodes`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function createNode(name, friends) {
  const data = {
    'name': name,
    'friends': friends || []
  }
  return graphApi.post(`/api/v1/graph/nodes`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

