export function getEndpoint(
  endpoint: keyof typeof Endpoints
): [string, string] {
  if (!Object.hasOwn(Endpoints, endpoint)) {
    return ["", ""];
  }

  const endpointParts = Endpoints[endpoint].split(":");
  const method = endpointParts.shift() ?? "";
  const url = endpointParts.join(":");
  return [method, url];
}

const Endpoints: { [k: string]: string } = {
  login: "POST:user/login/",
  signup: "POST:api/user/signup",
  whoami: "GET:api/current-user/whoami",
};

export default Endpoints;
