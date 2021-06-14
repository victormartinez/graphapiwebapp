import axios from 'axios';
import config from '../../config';

const graphApi = axios.create({
  baseURL: config.GRAPH_API_HOST,
});

export async function listNodes() {
  return graphApi.get(`/api/v1/graph/nodes`, {
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
