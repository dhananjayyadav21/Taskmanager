export class SharedServive {
  static getClassPriority = (priority) => {
    // eslint-disable-next-line
    switch (priority) {
      case "low":
        return "warning";
      case "medium":
        return "success";
      case "high":
        return "danger";
    }
  };

  static getInitials = (name) => {
    if(!!!name) return ""
    const words = name.trim().split(" "); // Split by spaces and remove extra spaces
    const firstName = words[0]?.[0] || ""; // Get the first letter of the first word
    const lastName = words[words.length - 1]?.[0] || ""; // Get the first letter of the last word
    return (firstName + lastName).toUpperCase(); // Combine and convert to uppercase
  };

  static nameToColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Convert the hash to a hex color, ensuring darker shades
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xaa;
      const darkValue = Math.floor((value * 0.6) + 50); // Scale to ensure darker tones
      color += darkValue.toString(16).padStart(2, "0");
    }
    
    return color;
  };

}
