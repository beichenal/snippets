const repeat = (cb: () => Array<[string, unknown]>, n = 20): Array<Record<string, unknown>> => {
  const data: Array<Record<string, unknown>> = [];
  const list = cb?.();
  if (!list) {
    return [];
  }

  for (let i = 0; i < n; i++) {
    const mockMap = list.reduce((pre, cur) => {
      let key: string, v: unknown;
      if (Array.isArray(cur)) {
        key = cur[0];
        if ("function" === typeof cur[1]) {
          v = cur[1]?.();
        } else {
          v = cur[1];
        }
      } else {
        key = cur;
        v = undefined;
      }

      pre[key] = v;
      return pre;
    }, {});

    data.push(mockMap);
  }

  return data;
};

export default repeat;
