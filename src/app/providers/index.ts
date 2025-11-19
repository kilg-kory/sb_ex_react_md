import { compose } from "shared/lib/compose";
import { withTheme } from "./mui";

export const withProviders = compose(withTheme);
