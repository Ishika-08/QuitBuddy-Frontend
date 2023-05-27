import { useRef, useState, useEffect } from 'react';
import { createStyles, NumberInput, NumberInputHandlers, ActionIcon, Button } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
const useStyles = createStyles(() => ({
  wrapper: {
    // Styles for the wrapper div remain the same
    // ...
  },

  control: {
    // Styles for the control div remain the same
    // ...
  },

  input: {
    // Styles for the input field remain the same
    // ...
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
  const [isInputAvailable, setIsInputAvailable] = useState(true);

  useEffect(() => {
    const checkInputAvailability = async () => {
      try {
        // Make a request to your API to check input availability
        const response = await fetch('YOUR_API_ENDPOINT');
        if (response.ok) {
          const data = await response.json();
          setIsInputAvailable(data.isAvailable);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error:any) {
        console.error('Error:', error.message);
      }
    };

    checkInputAvailability();
  }, []);
  const userID = useParams();
  const handleSubmit = async () => {
    const apiUrl = `https://your-api-url.com/${userID}/progressData`;
    const data = {
      value: value,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
        setIsInputAvailable(false); // Disable the input after successful submission
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error:any) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h3 style={{ color: '#838383' }}>
        In order to better understand your smoking habits, could you kindly share the number of cigarettes you've had
        today?
      </h3>
      <div className={classes.wrapper}>
        <ActionIcon<'button'>
          size={28}
          variant="transparent"
          onClick={() => handlers.current?.decrement()}
          disabled={value === min || !isInputAvailable}
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
          disabled={!isInputAvailable}
        />

        <ActionIcon<'button'>
          size={28}
          variant="transparent"
          onClick={() => handlers.current?.increment()}
          disabled={value === max || !isInputAvailable}
          className={classes.control}
          onMouseDown={(event) => event.preventDefault()}
        >
          <IconPlus size="1rem" stroke={1.5} />
        </ActionIcon>
      </div>
      <Button fullWidth mt="xl" onClick={handleSubmit} disabled={!isInputAvailable}>
        Submit
      </Button>
    </div>
  );
}
