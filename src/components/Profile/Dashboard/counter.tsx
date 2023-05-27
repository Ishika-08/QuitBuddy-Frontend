import { useRef, useState } from 'react';
import { createStyles, NumberInput, NumberInputHandlers, ActionIcon, rem, Button} from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';

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
    <Button fullWidth mt="xl">
            Submit
      </Button>
    </div>
   
  );
}