import { homepageActions } from './homepage-slice';

export const fetchTableData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://reqres.in/api/users?page=2');

      if (!response.ok) {
        throw new Error('Could not fetch cart Data');
      }
      const data = await response.json();
      return data;
    };
    try {
      const tableData = await fetchData();
      console.log(tableData.data);

      dispatch(homepageActions.addItem({ items: tableData.data }));
    } catch (error) {
      dispatch(
        homepageActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching Cart Data Failed!'
        })
      );
    }
  };
};
