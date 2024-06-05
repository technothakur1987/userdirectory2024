import { React, useEffect, useState } from "react";
import UseFetch from "./UseFetch";
import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Box,
  Typography,
  
  Link,
  
} from "@mui/material";



const Main = () => {
  //we fetch the data from useFetch 
  const {
    data: users,
    loading,
    error,
  } = UseFetch("https://jsonplaceholder.typicode.com/users");
  const [search, setSearch] = useState("");

  //handling Search State
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //if users exist , then filter users on the basis of search 
  const filteredUsers = users
    ? users.filter((user) =>
        user.name.toLowerCase().startsWith(search.toLowerCase())
      )
    : [];

  return (
    <>
    {/*if loading is true show loader*/}
      {loading && (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" size="5rem" />
        </Box>
      )}
{/*if error is true show Alert*/}
      {error && <Alert severity="error">{error.message}</Alert>}

{/* handling showing data*/}
      {!loading && (
        <Container>
          <TextField
            label={<span style={{ color: "#0d6efd" }}>Search Users</span>}
            variant="outlined"
            fullWidth
            margin="normal"
            value={search}
            onChange={handleSearch}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0d6efd",
                },
                "&:hover fieldset": {
                  borderColor: "#0d6efd",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0d6efd",
                },
              },
            }}
          />
          {filteredUsers.length > 0 ? (
            <List>
              {filteredUsers.map((user) => (
                <div  key={user.id}>
                <ListItem key={user.id} sx={{ borderBottom: "3px solid rgb(13, 110, 253, 0.3)", paddingBottom:"1.5rem" }}>
                  <ListItemText 
                    primary={
                      <Typography
                        style={{ color: "#0d6efd", display: "block",textTransform:"uppercase" }}
                        component="h6"
                        variant="h6"
                      >{`ID: ${user.id} - ${user.name}`}</Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "block", color: "#0d6efd" }}
                          component="span"
                          variant="body2"
                        >
                          ✉️ : {user.email}
                        </Typography>
                        <Typography
                          sx={{ display: "block", color: "#0d6efd" }}
                          component="span"
                          variant="body2"
                        >
                          👤 : {user.username}
                        </Typography>
                        <Typography
                          sx={{ display: "block", color: "#0d6efd" }}
                          component="span"
                          variant="body2"
                        >
                          🏚️ : {user.address.street}, {user.address.suite},{" "}
                          {user.address.city}, {user.address.zipcode}
                        </Typography>
                        <Typography
                          sx={{ display: "block", color: "#0d6efd" }}
                          component="span"
                          variant="body2"
                        >
                          📱 : {user.phone}
                        </Typography>
                        <Link underline="none"  href={`https://www.${user.website}`} 
                          sx={{ display: "block", color: "#0d6efd",'&:hover': {
        
                            cursor:'pointer',
                            fontWeight:"900" 
                          }, }}
                          
                          variant="body2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        🌍: {user.website}
                        </Link>
                      </>
                    }
                  />
                </ListItem>
                
                </div>
              ))}
            </List>
          ) : (
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      style={{ color: "#0d6efd", display: "block", textAlign:'center' }}
                      component="h6"
                      variant="h6"
                    >{`No User Found ...`}</Typography>
                  }
                ></ListItemText>
              </ListItem>
            </List>
          )}
        </Container>
      )}
    </>
  );
};

export default Main;
