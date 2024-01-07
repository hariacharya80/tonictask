type ReqUrlProps = {
  url: string | URL | Request | null;
  isAuthenticated?: boolean;
  data?: any;
  type?: string;
};

type GetHeaderProps = {
  isAuthenticated: boolean;
  type?: string;
};

const baseURL =
  process.env.BACKEND_URL || "https://jsonplaceholder.typicode.com";

const getHeader = ({
  isAuthenticated,
  type = "application/json",
}: GetHeaderProps) => {
  const storedToken = localStorage.getItem("token");
  const headers: { [key: string]: string } = {};
  headers["Content-Type"] = type;

  if (isAuthenticated) {
    headers["Authorization"] = `Bearer ${storedToken}`;
  }

  return headers;
};

const handleError = (err: any) => {
  // if (err?.response) {
  //   if (
  //     err?.response?.data?.message &&
  //     typeof err?.response?.data?.message === "object"
  //   ) {
  //     return "Unable to complete your request!";
  //   } else if (err?.response?.data?.message) {
  //     return err?.response?.data?.message;
  //   } else {
  //     return `Error with status code : ${err?.response?.status}`;
  //   }
  // } else if (err?.request) {
  //   if (err.request?.status < 100) {
  //     return "Network Error!";
  //   }
  // }

  if (err) {
    return "Somtingwnet worng";
  }
};

export const api = {
  get: async ({ url, isAuthenticated }: ReqUrlProps): Promise<any> => {
    try {
      const headers = getHeader({
        isAuthenticated: isAuthenticated || false,
      });

      const config = {
        headers: headers,
      };

      const response = await fetch(`${baseURL}${url}`, config);
      const data = await response.json();
      return data;
    } catch (error) {
      const message = handleError(error);

      return { status: "failure", message: message };
    }
  },

  post: async ({
    url,
    data,
    isAuthenticated = false,
    type = "application/json",
  }: ReqUrlProps): Promise<any> => {
    try {
      const headers = getHeader({
        isAuthenticated: isAuthenticated || false,
        type,
      });

      const config = {
        headers: headers,
        method: "POST",
        body: JSON.stringify(data),
      };

      const response = await fetch(`${baseURL}${url}`, config);
      const dataToSend = await response.json();
      return dataToSend;
    } catch (error) {
      const message = handleError(error);

      return { status: "failure", message: message };
    }
  },
  patch: async ({
    url,
    data,
    isAuthenticated = false,
    type = "application/json",
  }: ReqUrlProps): Promise<any> => {
    try {
      const headers = getHeader({
        isAuthenticated: isAuthenticated || false,
        type,
      });

      const config = {
        headers: headers,
        method: "PATCH",
        body: JSON.stringify(data),
      };

      const response = await fetch(`${baseURL}${url}`, config);
      const dataToSend = await response.json();
      return dataToSend;
    } catch (error) {
      const message = handleError(error);

      return { status: "failure", message: message };
    }
  },

  delete: async ({
    url,
    data,
    isAuthenticated = false,
    type = "application/json",
  }: ReqUrlProps) => {
    try {
      const headers = getHeader({
        isAuthenticated: isAuthenticated || false,
        type,
      });

      const config = {
        headers: headers,
        method: "DELETE",
      };

      const response = await fetch(`${baseURL}${url}`, config);

      const dataToSend = await response.json();
      return { status: "success", data: dataToSend };
    } catch (error) {
      const message = handleError(error);
      return { status: "failure", message: message };
    }
  },
};
