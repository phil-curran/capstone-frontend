/* eslint-disable react/prop-types */
import { Button, Tooltip } from "@chakra-ui/react";

const SidebarButton = ({ position, icon_name, tooltip }) => {
  return (
    <Tooltip hasArrow label={tooltip} placement="auto">
      <Button
        _hover={{ border: "1px solid #353b48", color: "#3498db" }} // Adjusted _hover to change icon color
        _active={{ bg: "#353b48", color: "#3498db" }} // Adjusted _active to change icon color
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
    </Tooltip>
  );
};

export default SidebarButton;
