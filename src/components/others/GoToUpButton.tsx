import { useState, useEffect } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa"; // Import the up arrow icon

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 300) {
      // Adjust this value to control when the button appears
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  const bgColor = useColorModeValue(
    "rgba(0, 0, 0, 0.5)",
    "rgba(255, 255, 255, 0.4)"
  );

  return (
    <div>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          icon={<FaArrowUp />}
          position="fixed"
          bottom="60px"
          right="10px"
          borderRadius="50%"
          bg={bgColor}
          color="white"
          _hover={{ bg: "gray.400" }} // Change background color on hover
          aria-label="Go to top"
          zIndex="999"
        />
      )}
    </div>
  );
};

export default GoToTopButton;
