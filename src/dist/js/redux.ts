/** Types **/
import type { AnyAction } from "../../redux/configureStore";
import type { IStandardList } from "../../redux/reducers/initialState";
import type { IAnyObject, IBasicRecord } from "../../types";

const reduxMethods = {
  addResource: <T extends IBasicRecord>(
    state: IStandardList<T>,
    action: AnyAction,
    key: string
  ) => {
    const list = Object.values(
      [...state.list, action[key]].reduce((r: IAnyObject, props: T) => {
        if (props.resource_name === action[key].resource_name) {
          r[props.resource_name] = { ...props, ...action[key] };
        } else {
          r[props.resource_name] = props;
        }
        return r;
      }, {})
    );
    return { ...state, list };
  },
  /**
   * @param state Array
   * @param action expecting { results: [] } callback from AWS WebSocket
   * @returns Array
   */
  joinOrOverwrite: <T extends IBasicRecord>(
    state: IStandardList<T>,
    action: AnyAction
  ): IStandardList<T> => {
    const join = action.dataSetKey === state.dataSetKey;
    const list = join
      ? [...state.list, ...action.results]
      : [...action.results];
    return { ...state, list };
  },
  orderResources: <T extends IBasicRecord>(resources: Array<T>): Array<T> => {
    if (resources.length === 0) return resources;

    return resources.sort(
      (a: T, b: T) => a.timestamp! - b.timestamp! //Changed to not undef for type safety
    );
  },
  resetResources: <T extends IBasicRecord>(
    state: IStandardList<T>
  ): IStandardList<T> => {
    return { ...state, list: [] };
  },
  removeDuplicates: <T extends IBasicRecord>(
    state: IStandardList<T>,
    action: AnyAction
  ): IStandardList<T> => {
    function removeDups(r: { [k: string]: T }, props: T) {
      if (props) r[props.resource_name] = props;
      return r;
    }
    return {
      ...state,
      list: Object.values(
        [...state.list, ...(action.results || [])].reduce(removeDups, {})
      ),
    };
  },
  //Assume state is default [] structure. action is { [key]: props };
  removeMatchCase: <T extends IBasicRecord>(
    state: IStandardList<T>,
    action: AnyAction,
    key: string
  ): IStandardList<T> => {
    const removeMatch = (props: T) => {
      return props.resource_name !== action[key].resource_name;
    };
    return { ...state, list: state.list.filter(removeMatch) };
  },
  /**
   * @description Toggle modals, sidebars, etc.
   */
  // toggleState: (state: IToggle, action: AnyAction, key: string) => {
  //   return { ...state, [key]: action.show === false ? false : !state[key] };
  // },
  /** @description Update property in details and list */
  updateMatchCase: <T extends IBasicRecord>(
    state: IStandardList<T>,
    action: AnyAction,
    key: string
  ): IStandardList<T> => {
    const replaceMatch = <T extends IBasicRecord>(props: T): T => {
      return props.resource_name === action[key].resource_name
        ? { ...props, ...action[key] }
        : props;
    };

    return {
      ...state,
      details: { ...state.details, ...action[key] },
      list: state.list.map<T>(replaceMatch),
    };
  },
};

export default reduxMethods;
