import { makeStyles } from "@material-ui/core/styles";
export const useHeaderStyles = makeStyles((theme) => ({
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
    backgroundColor: "burlywood",
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
  },
  loginButton: {
    position: "absolute",
    right: 0,
    color: "currentColor",
  },
  headerStyle: {
    position: "static",
    backgroundColor: "burlywood",
  },
  fControl: {
    minWidth: 100,
    position: "absolute",
    right: 100,
    // min-width: 100px;
  },
}));
