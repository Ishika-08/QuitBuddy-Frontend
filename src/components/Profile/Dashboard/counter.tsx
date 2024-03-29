import { useRef, useState } from 'react';
import { createStyles, NumberInput, NumberInputHandlers, ActionIcon, rem, Button} from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${rem(6)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  successMessage: {
    color: 'green',
    marginTop: '4rem',
    fontSize: '2rem',
    margin: '0 auto',
    padding: '2rem'
  },

  control: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,

    '&:disabled': {
      borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },

  input: {
    textAlign: 'center',
    paddingRight: `${theme.spacing.sm} !important`,
    paddingLeft: `${theme.spacing.sm} !important`,
    height: rem(28),
    flex: 1,
  },
}));

interface QuantityInputProps {
  min?: number;
  max?: number;
}


export default function QuantityInput({ min = 0, max = 30 }: QuantityInputProps) {
  const { classes } = useStyles();
  const handlers = useRef<NumberInputHandlers>(null);
  const [value, setValue] = useState<number | ''>(0);
  const [success, setSuccess] = useState(false);

  const {userID} = useParams()


  const handleSubmit = () => {
    // Create the payload object
    const formData = {
      smoked: value
    };

    // Make the API request
    fetch(`https://geeks-for-geeks-health-backend.up.railway.app/${userID}/progressData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          // Handle successful response
          console.log('Data submitted successfully');
        } else {
          // Handle error response
          console.error('Failed to submit data');
        }
      })
      .catch((error) => {
        // Handle request error
        console.error('Request failed', error);
      });
    }

  return (
    <div>
        <h3 style={{color: '#838383'}}>In order to better understand your smoking habits, could you kindly share the number of cigarettes you've had today?</h3>
        <div className={classes.wrapper}>
      <ActionIcon<'button'>
        size={28}
        variant="transparent"
        onClick={() => handlers.current?.decrement()}
        disabled={value === min}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconMinus size="1rem" stroke={1.5} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        handlersRef={handlers}
        value={value}
        onChange={setValue}
        classNames={{ input: classes.input }}
      />

      <ActionIcon<'button'>
        size={28}
        variant="transparent"
        onClick={() => handlers.current?.increment()}
        disabled={value === max}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconPlus size="1rem" stroke={1.5} />
        
      </ActionIcon>
    </div>
    <Button fullWidth mt="xl" onClick={handleSubmit}>
            Submit
      </Button>
      {success && <p className={classes.successMessage}>Submission successful!</p>} {/* Display success message */}
    </div>
   
  );
}
