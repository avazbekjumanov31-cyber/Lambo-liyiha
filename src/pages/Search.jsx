
import Box from '@mui/material/Box';
  import TextField from '@mui/material/TextField';
  function Search() {
    return (
    <>
    <div className='bg-black flex items-center gap-5 '>
    <Box className='border-white ml-5'
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className='text-white'
          id="outlined-basic"
          label="Search on the website"
          variant="outlined"
          sx={{
            '& .MuiInputBase-input': { color: 'white' },
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'white' }
          }}
        />
      
      </Box>
      <button className='bg-white h-15 w-20 font-bold  '>Search</button>
    </div>
    
    </>
    )
  }

  export default Search
