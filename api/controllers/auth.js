import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM collaborators WHERE email = ?";

  db.query(q, req.body.email, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10); //Without a salt, if two users have the same password, they would generate the same hash and also salt improves the security of stored passwords
    const hash = bcrypt.hashSync(req.body.first_name, salt);

    const q =
      "INSERT INTO collaborators(`email`,`first_name`,`last_name`,`phone`,`address`,`password`) VALUES (?)";

    const values = [
      req.body.email,
      req.body.first_name,
      req.body.last_name,
      req.body.phone,
      req.body.address,
      hash,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM collaborators WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Utilisateur non trouvé!");

    //If there is no error and our user exist we are going to check our password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    //If our password is not correct
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json("Mauvais nom d'utilisateur ou mot de passe !");

    //create our token
    const token = jwt.sign({ id: data[0].id }, "jwtkey"); //jwtkey : secret-key
    const { password, ...other } = data[0]; //send other informations not password

    res
      .cookie("access_token", token, {
        //access_token is the cookie-name
        httpOnly: true, //for extra security
      })
      .status(200)
      .json(other);

    // console.log("Headers:", res.getHeaders());
  });
};
