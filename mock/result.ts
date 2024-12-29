import repeat from "./index";
import { faker } from "@faker-js/faker";
import { DataType } from "@type/index";

export const mockData = repeat(() => {
  return [
    ["id", () => faker.string.uuid()],
    ["content", () => faker.lorem.sentences()]
  ];
}) as unknown as DataType[];
