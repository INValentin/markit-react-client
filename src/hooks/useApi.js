import {} from "react";
import useFetch from "./useFetch";

// local dev api uri

// export const BASE_URL = "http://localhost:8000/api";

/* Production api url */

export const BASE_URL = "https://urmarks-api.herokuapp.com/api";
// const routes = ['index', 'store', 'update', 'delete', 'show'];

const useApi = (resource, custom = {}) => {
  const { loading, get, post, put, del } = useFetch();

  const url = (URL) =>
    BASE_URL +
    `/${typeof resource === "function" ? resource() : resource}` +
    URL;

  return {
    loading,
    url,
    index() {
      return get(url(`/`));
    },

    show(id) {
      return get(url(`/${id}`));
    },

    store(body) {
      return post(url(`/`), { body });
    },

    update(id, body) {
      return put(url(`/${id}`), { body });
    },

    destroy(id) {
      return del(url(`/${id}`));
    },
    ...custom,
  };
};

export const useAuthApi = () => {
  const { loading, get, post } = useFetch();
  return {
    loading,
    login(body) {
      return post(BASE_URL + "/auth/login", { body });
    },
    logout() {
      return post(BASE_URL + "/auth/logout");
    },
    currentUser() {
      return get(BASE_URL + "/auth/user");
    },
  };
};

export const useDptApi = () => {
  const { loading, get } = useFetch();
  const endpoints = useApi("departments");

  return {
    ...endpoints,
    loading: loading || endpoints.loading,
    listModules(id) {
      const url = endpoints.url(`/${id}/modules`);
      // console.log({url})
      return get(url);
    },
  };
};

export const useStudentApi = () => {
  const { loading, post, get } = useFetch();
  const endpoints = useApi("students");

  return {
    ...endpoints,
    loading: loading || endpoints.loading,
    storeMarks(id, body) {
      return post(endpoints.url(`/${id}/marks`), { body });
    },

    listMarks(id) {
      return get(endpoints.url(`/${id}/marks`));
    },

    listModules(id) {
      return get(endpoints.url(`/${id}/modules`));
    },
  };
};

export const useTeacherApi = () => {
  const { loading, get } = useFetch();
  const endpoints = useApi("teachers");

  return {
    ...endpoints,
    loading: loading || endpoints.loading,
    listModules(id) {
      return get(endpoints.url(`/${id}/modules`));
    },
  };
};

export const useModuleApi = () => {
  const { loading, post, get } = useFetch();
  const endpoints = useApi("modules");

  return {
    ...endpoints,
    loading: loading || endpoints.loading,
    storeMarks(id, body) {
      return post(endpoints.url(`/${id}/marks`), { body });
    },

    listStudents(id) {
      return get(endpoints.url(`/${id}/students`));
    },

    listMarks(id) {
      return get(endpoints.url(`/${id}/marks`));
    },
  };
};

export const useMarksApi = () => {
  const endpoints = useApi("marks");

  return { ...endpoints };
};

export const usePasswordChangeApi = () => {
  const { loading, post } = useFetch();
  const url = (URL) => BASE_URL + URL;

  return {
    loading,
    changePassword(body) {
      return post(url("/auth/user/change-password"), { body });
    },
  };
};

export const useUserInfoChangeApi = () => {
  const { loading, post } = useFetch();
  const url = (URL) => BASE_URL + URL;

  return {
    loading,
    changeUserInfo(body) {
      return post(url("/auth/user/change-info"), { body });
    },
  };
};

export const chooseAPI = (apiName) => {
  const apis = {
    "": {},
    modules: useModuleApi,
    marks: useMarksApi,
    departments: useDptApi,
    students: useStudentApi,
    teachers: useTeacherApi,
  };
  return apiName ? apis[apiName]() : {};
  // if (apiName) {
  // } else {
  //     return apis
  // }
};

export default useApi;
