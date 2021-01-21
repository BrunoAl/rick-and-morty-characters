import { rest } from 'msw';
import { charactersData, dimentionsData } from '../utils/APIMockData/';

const BASE_API = '${BASE_API}';

const handlers = [
  rest.get(`${BASE_API}/dimension`, (req, res, ctx) => {
    return res(ctx.json(dimentionsData));
  }),
  rest.get(`${BASE_API}/episode`, (req, res, ctx) => {
    return res(ctx.json(dimentionsData));
  }),
  rest.get(`${BASE_API}/location`, (req, res, ctx) => {
    return res(ctx.json(dimentionsData));
  }),
  rest.get(`${BASE_API}/character/:ids`, (req, res, ctx) => {
    return res(ctx.json(charactersData));
  }),
];

export default handlers;
