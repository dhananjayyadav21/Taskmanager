import React, { useState, useRef } from "react";
import { SharedServive } from "../services/SharedService";
const UserDropDown = () => {
  const [selectedUser, setSelectedUser] = useState("Not Assigned");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const users = [
    { id: 1, name: "Sanjay Yadav", email: "sanjay@gmail.com", initials: "SY" },
    { id: 2, name: "Anita Sharma", email: "anita@gmail.com", initials: "AS" },
    { id: 3, name: "Ravi Kumar", email: "ravi@gmail.com", initials: "RK" },
    { id: 4, name: "Priya Mehta", email: "priya@gmail.com", initials: "PM" },
    { id: 5, name: "Karan Singh", email: "karan@gmail.com", initials: "KS" },
    { id: 6, name: "Nisha Verma", email: "nisha@gmail.com", initials: "NV" },
    { id: 7, name: "Amit Patel", email: "amit@gmail.com", initials: "AP" },
    { id: 8, name: "Sneha Roy", email: "sneha@gmail.com", initials: "SR" },
    { id: 9, name: "Deepak Gupta", email: "deepak@gmail.com", initials: "DG" },
    { id: 10, name: "Pooja Desai", email: "pooja@gmail.com", initials: "PD" },
  ];
  

  console.log(selectedUser)
  const toggleDropdown = () => {
    console.log("prevState")
    setIsDropdownOpen((prevState) => !prevState);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    setIsDropdownOpen(false);
  };

  // Close dropdown on outside click
  React.useEffect(() => {
    // eslint-disable-next-line
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-btn" onClick={toggleDropdown}>
        {!!selectedUser && selectedUser === "Not Assigned" && selectedUser}
        {
            !!selectedUser && selectedUser !== "Not Assigned" && <>
            <div className="circle" style={{backgroundColor:SharedServive.nameToColor(selectedUser.name)}}>{SharedServive.getInitials(selectedUser.name)}</div>
            <div className="detail">
              <p>{selectedUser.name}</p>
            </div>
          </>
        }
      </div>
      {isDropdownOpen && (
        <div className="user-dropdown-menu">
          {users.map((user) => (
            <div
              key={user.id}
              className="dropdown-item"
              onClick={() => selectUser(user)}
            >
              <div className="circle" style={{backgroundColor:SharedServive.nameToColor(user.name)}}>{user.initials}</div>
              <div className="detail">
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDropDown;
