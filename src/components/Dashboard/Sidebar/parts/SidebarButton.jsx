/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";

const SidebarButton = ({ position, icon_name }) => {
  return (
    <Button
      _hover={{ border: "1px solid #353b48" }}
      _active={{ bg: "#353b48" }}
      variant="ghost"
      className={position}
      width="50px"
      height="50px"
      borderRadius={8}
    >
      <span
        color="blue"
        width="60px"
        height="60px"
        className="material-symbols-outlined"
      >
        {icon_name}
      </span>
    </Button>
  );
};

export default SidebarButton;

//bg="#353b48"

{
  /* <Button bg="#353b48" className="two" width="50px" height="50px">
<span
  width="60px"
  height="60px"
  color="red"
  className="material-symbols-outlined"
>
  sleep_score
</span>
</Button> */
}

{
  /* <Button bg="#353b48" className="two" width="50px" height="50px">
<span
  width="60px"
  height="60px"
  className="material-symbols-outlined"
>
  sleep_score
</span>
</Button>
<IconButton
className="three"
aria-label="Search database"
icon={<SearchIcon />}
/> */
}
