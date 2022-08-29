import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { RadioGroup, Radio } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Checkbox } from "@mui/material";
import { FormControl, FormHelperText } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '../../utils/formValidationSchem'

const userInfo = {
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
}

const Register = () => {
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current++;
        console.log('react-hook-form render:', renderCount.current)
    });

    const { register, control, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        defaultValues: userInfo,
        resolver: yupResolver(RegisterSchema)
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler = (data) => {
        console.log('----', data)
    };
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
                    Register - React Hook Form
                </Typography>
                <Box sx={{ mt: 3 }} >
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Controller
                                    name="username"
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            label="Username"
                                            {...register('username')}
                                            value={field.value}
                                            error={errors.username && Boolean(errors.username)}
                                            helperText={errors.username?.message}
                                            variant="standard"
                                            required
                                            fullWidth
                                            autoFocus
                                            {...field}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            label="Email address"
                                            {...register('email')}
                                            error={errors.email && Boolean(errors.email)}
                                            helperText={errors.email?.message}
                                            variant="standard"
                                            required
                                            fullWidth
                                            {...field}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            label="First Name"
                                            {...register('firstName')}
                                            error={errors.firstName && Boolean(errors.firstName)}
                                            helperText={errors.firstName?.message}
                                            variant="standard"
                                            name="firstName"
                                            required
                                            fullWidth
                                            {...field}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            label="Last Name"
                                            name="lastName"
                                            {...register('lastName')}
                                            error={errors.lastName && Boolean(errors.lastName)}
                                            helperText={errors.lastName?.message}
                                            variant="standard"
                                            required
                                            fullWidth

                                        />
                                    }
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            label="Password"
                                            name="password"
                                            {...register('password')}
                                            error={errors.password && Boolean(errors.password)}
                                            helperText={errors.password?.message}
                                            required
                                            fullWidth
                                            variant="standard"
                                            type="password"
                                        />
                                    }
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            {...register('confirmPassword')}
                                            error={errors.confirmPassword && Boolean(errors.confirmPassword)}
                                            helperText={errors.confirmPassword?.message}
                                            variant="standard"
                                            type="password"
                                            required
                                            fullWidth
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) =>
                                        <FormControl>
                                            <RadioGroup
                                                {...register('gender')}
                                                required
                                                row
                                                name="gender"
                                                value={field.value}
                                                onChange={field.onChange}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            </RadioGroup>
                                            <FormHelperText error={errors.gender && Boolean(errors.gender)}>
                                                {errors.gender && errors.gender?.message}
                                            </FormHelperText>
                                        </FormControl>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="birthday"
                                    control={control}
                                    render={({ field }) =>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                {...register('birthday')}
                                                label="birthday"
                                                value={field.value}
                                                onChange={field.onChange}
                                                name="birthday"
                                                renderInput={(params) => (
                                                    <TextField
                                                        error={errors.birthday && Boolean(errors.birthday)}
                                                        helperText={errors.birthday && errors.birthday?.message}
                                                        label="Birthday"
                                                        {...params}
                                                        variant="standard"
                                                        fullWidth
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    }
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="securityQuestion"
                                    control={control}
                                    render={({ field }) =>
                                        <FormControl variant="standard" fullWidth required>
                                            <InputLabel id="security-question-select-label">
                                                Security Question
                                            </InputLabel>
                                            <Select
                                                {...register('securityQuestion')}
                                                name="securityQuestion"
                                                label="Security Question"
                                                value={field.value}
                                                onChange={field.onChange}
                                            >
                                                <MenuItem value={0}>
                                                    In what city or town did your mother and father meet?
                                                </MenuItem>
                                                <MenuItem value={1}>
                                                    Where were you when you first heard about 9/11?
                                                </MenuItem>
                                            </Select>
                                            <FormHelperText
                                                error={errors.securityQuestion && Boolean(errors.securityQuestion)}
                                            >
                                                {errors.securityQuestion && errors.securityQuestion?.message}
                                            </FormHelperText>
                                        </FormControl>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="securityAnswer"
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            {...register('securityAnswer')}
                                            label="Answer"
                                            name="securityAnswer"
                                            required
                                            fullWidth
                                            variant="standard"
                                            error={errors.securityAnswer && Boolean(errors.securityAnswer)}
                                            helperText={errors.securityAnswer && errors.securityAnswer?.message}
                                        />
                                    }
                                />

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="termsAgreed"
                                control={control}
                                render={({ field }) =>
                                    <FormControl>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...register('termsAgreed')}
                                                    name="termsAgreed"
                                                    color="primary"
                                                    required
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            }
                                            label="I agree to the Terms of Use"
                                        />
                                        <FormHelperText
                                            error={errors.termsAgreed && Boolean(errors.termsAgreed)}
                                        >
                                            {errors.termsAgreed && errors.termsAgreed?.message}
                                        </FormHelperText>
                                    </FormControl>
                                }
                            />

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit(onSubmitHandler)}
                        >
                            Register
                        </Button>
                    </form>
                </Box>
            </Box>
        </Container >
    );
};

export default Register;

// import { useEffect, useRef } from "react";
// // import Select from "react-select";
// import { useForm, Controller } from "react-hook-form";
// import TextField from "@mui/material/TextField";

// const Register = () => {
//     const renderCount = useRef(0)
//     useEffect(() => {
//         renderCount.current++;
//         console.log('react-hook-form render:', renderCount.current)
//     });
//     const { control, handleSubmit, watch } = useForm({
//         defaultValues: {
//             firstName: '',
//             lastName: '',
//             select: {}
//         }
//     });
//     const onSubmit = data => console.log(data);
//     // console.log(watch())

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Controller
//                 name="firstName"
//                 control={control}
//                 render={({ field }) => <TextField {...field} />}
//             />
//             <Controller
//                 name="lastName"
//                 control={control}
//                 render={({ field }) => <TextField {...field} />}
//             />
//             {/* <Controller
//                 name="select"
//                 control={control}
//                 render={({ field }) => <Select
//                     {...field}
//                     options={[
//                         { value: "chocolate", label: "Chocolate" },
//                         { value: "strawberry", label: "Strawberry" },
//                         { value: "vanilla", label: "Vanilla" }
//                     ]}
//                 />}
//             /> */}
//             <input type="submit" />
//         </form>
//     );
// };
// export default Register;


// import { useEffect, useRef } from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//     const renderCount = useRef(0)
//     useEffect(() => {
//         renderCount.current++;
//         console.log('react-hook-form render:', renderCount.current)
//     });
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);

//     // console.log(watch()); // watch input value by passing the name of it

//     return (
//         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {/* register your input into the hook by invoking the "register" function */}
//             <input  {...register("example")} />

//             {/* include validation with required or other standard HTML validation rules */}
//             <input {...register("exampleRequired", { required: true })} />
//             {/* errors will return when field validation fails  */}
//             {errors.exampleRequired && <span>This field is required</span>}

//             <input type="submit" />
//         </form>
//     );
// }