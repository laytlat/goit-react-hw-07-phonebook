import axios from 'axios';

const BASE_URL = 'https://64883f2a0e2469c038fd5487.mockapi.io/contacts';

export async function getContactsFromAPI() {
  const data = await axios.get(BASE_URL).then(response => response.data);
  return data;
}
