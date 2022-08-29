import React, { useEffect, useRef } from "react"
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { RadioGroup, Radio, FormControl, FormHelperText } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import { RegisterSchema } from '../../utils/formValidationSchem'

const Register = () => {
    // console.count()
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current++;
        console.log('formik render:', renderCount.current)
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            gender: "",
            birthday: null,
            securityQuestion: 0,
            securityAnswer: "",
            termsAgreed: false
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            let user = values;
            user.birthday = Date(user.birthday);
            console.log(values);
        }
    })

    // console.log(formik)

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: 3,
                    paddingTop: 2,
                    paddingRight: 2,
                    paddingLeft: 2,
                    paddingBottom: 2
                }}
            >
                <Typography component="h1" variant="h5">
                    Register - Formik
                </Typography>

                <Box sx={{ mt: 3 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    variant="standard"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    onChange={formik.handleChange}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="standard"
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email address"
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="standard"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="standard"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="standard"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="standard"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    fullWidth
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.confirmPassword &&
                                        Boolean(formik.errors.confirmPassword)
                                    }
                                    helperText={
                                        formik.touched.confirmPassword && formik.errors.confirmPassword
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <RadioGroup
                                        required
                                        row
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                    >
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Male"
                                        />
                                    </RadioGroup>
                                    <FormHelperText
                                        error={formik.touched.gender && Boolean(formik.errors.gender)}
                                    >
                                        {formik.touched.gender && formik.errors.gender}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Birthday"
                                        onChange={(value) =>
                                            formik.setFieldValue("birthday", value, true)
                                        }
                                        name="birthday"
                                        value={formik.values.birthday}
                                        renderInput={(params) => (
                                            <TextField
                                                error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                                                // helperText={touched.birthday && errors.birthday}
                                                label="Birthday"
                                                {...params}
                                                variant="standard"
                                                fullWidth
                                            />
                                        )}
                                    />
                                    <FormHelperText
                                        error={
                                            formik.touched.birthday &&
                                            Boolean(formik.errors.birthday)
                                        }
                                    >
                                        {formik.touched.birthday && formik.errors.birthday}
                                    </FormHelperText>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="standard" fullWidth required>
                                    <InputLabel id="security-question-select-label">
                                        Security Question
                                    </InputLabel>
                                    <Select
                                        labelId="security-question-select-label"
                                        id="securityQuestion"
                                        name="securityQuestion"
                                        label="Security Question"
                                        value={formik.values.securityQuestion}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.securityQuestion &&
                                            Boolean(formik.errors.securityQuestion)
                                        }
                                    >
                                        <MenuItem value={0}>
                                            In what city or town did your mother and father meet?
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            Where were you when you first heard about 9/11?
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    name="securityAnswer"
                                    required
                                    fullWidth
                                    id="securityAnswer"
                                    label="Answer"
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.securityAnswer && Boolean(formik.errors.securityAnswer)
                                    }
                                    helperText={
                                        formik.touched.securityAnswer && formik.errors.securityAnswer
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="termsAgreed"
                                            color="primary"
                                            required
                                            value={formik.values.agreedTerms}
                                            onChange={formik.handleChange}
                                        />
                                    }
                                    label="I agree to the Terms of Use"
                                />
                                <FormHelperText
                                    error={formik.touched.termsAgreed && Boolean(formik.errors.termsAgreed)}
                                >
                                    {formik.touched.termsAgreed && formik.errors.termsAgreed}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={formik.handleSubmit}
                        >
                            Register
                        </Button>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
