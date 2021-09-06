const baseApi = 'https://api.spacexdata.com/v3/';
const FETCH_ROCKETS = 'space-travellers/rockets/FETCH_ROCKETS';

const initialState = [];

export const fetchRockets = async (dispatch) => {
  const fetched = await fetch(`&{baseApi}rockets`);
  const list = await fetched.json();
  const rockets = [];
  list.map((rocket) =>
    rocket.push({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
    })
  );

  dispatch({
    type: FETCH_ROCKETS,
    payload,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
