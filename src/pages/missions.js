const fetchData = () => fetch('https://api.spacexdata.com/v3/missions');
const ADD_MISSION = 'space/missions/ADD_MISSION';
const MISSION_START = 'space/missions/MISSION_START';
const MISSION_FAILED = 'space/missions/MISSION_FAILED';
const JOIN_MISSION = 'space/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space/missions/LEAVE_MISSION';

const loadMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

const loadingStart = () => ({
  type: MISSION_START,
});

const manageFailure = (payload) => ({
  type: MISSION_FAILED,
  payload,
});

export const allowJoinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});
export const allowLeaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const selectData = (arr) => {
  const filteredArray = [];
  arr.forEach((element) => {
    const { mission_id: id, mission_name: name, description } = element;
    filteredArray.push({
      id,
      name,
      description,
    });
  });
  return filteredArray;
};

export const getMissionsData = () => (dispatch) => {
  dispatch(loadingStart());
  fetchData()
    .then((res) => res.json())
    .then((result) => dispatch(loadMission(result)))
    .catch((err) => dispatch(manageFailure(err.message)));
};

const missionsReducer = (state = { missions: [] }, action) => {
  switch (action.type) {
    case MISSION_START:
      return {
        ...state,
        loading: true,
      };
    case MISSION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_MISSION:
      return {
        ...state,
        missions: selectData(action.payload),
        loading: false,
        error: null,
      };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.payload) {
            return mission;
          }
          return {
            ...mission,
            reserved: true,
          };
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.payload) {
            return mission;
          }
          return {
            ...mission,
            reserved: false,
          };
        }),
      };
    default:
      return state;
  }
};

export default missionsReducer;
