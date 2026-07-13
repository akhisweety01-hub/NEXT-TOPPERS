// Paste your quiz page URL between the quotes below.
const QUIZ_LINK = "";

const topicMeta = [
  { name: "Variables", slug: "variables" },
  { name: "Data Types", slug: "data-types" },
  { name: "Basic I/O", slug: "basic-io" },
  { name: "Coding Fluency", slug: "coding-fluency" },
  { name: "Data Structures", slug: "data-structures" }
];

const slides = [
  {
    topic: "Python Fundamentals",
    slug: "cover",
    title: "Python Fundamentals Revision Deck",
    kicker: "Test Topics",
    lead: "Variables, Data Types, Basic I/O, Coding Fluency, and Data Structures.",
    image: "assets/test-topics.jpeg",
    sections: [
      {
        kind: "points",
        title: "Revision map",
        items: [
          "Use the college notes as the base: types matter, input returns text, conversion must be explicit, and organized data beats many separate variables.",
          "Each topic has 10 focused revision pages with examples, common mistakes, and a compact final sheet.",
          "The Mars Climate Orbiter case is included because it shows why data type and unit conversion mistakes are serious."
        ]
      }
    ]
  },

  {
    topic: "Variables",
    slug: "variables",
    title: "Variables store values under names",
    kicker: "Variables 01",
    lead: "A variable is a label that points to a value. You choose the label; Python keeps the value in memory and lets you reuse it.",
    sections: [
      {
        kind: "points",
        title: "Core idea",
        items: [
          "Think of `age = 25` as: create the value `25`, then bind the name `age` to it.",
          "A variable name should describe what the value means, not only what type it is.",
          "The same value can have more than one name, and one name can later point to a new value."
        ]
      },
      {
        kind: "code",
        title: "Simple bindings",
        code: `age = 25
name = "Raj"
price = 99.5

print(name)
print(age)
print(price)`
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Read assignment from right to left",
    kicker: "Variables 02",
    lead: "The assignment operator does not mean mathematical equality. It means: evaluate the right side, then store the result in the name on the left.",
    sections: [
      {
        kind: "compare",
        leftTitle: "Math equality",
        leftText: "`x = x + 1` looks impossible in algebra because both sides cannot be equal at the same time.",
        rightTitle: "Python assignment",
        rightText: "`x = x + 1` means read old `x`, add 1, then reassign `x` to the new result."
      },
      {
        kind: "code",
        title: "Step by step",
        code: `score = 10
score = score + 5
score = score * 2

print(score)  # 30`
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Good names prevent wrong thinking",
    kicker: "Variables 03",
    lead: "Your notes mention PEP 8 naming. In Python, readable names are part of correctness because they make bugs easier to see.",
    sections: [
      {
        kind: "table",
        headers: ["Do", "Avoid", "Reason"],
        rows: [
          ["student_name", "student name", "Spaces are not allowed in variable names."],
          ["total2026", "2026total", "Names cannot start with a number."],
          ["user_score", "user-score", "A hyphen is read as subtraction."],
          ["class_", "class", "`class` is a reserved keyword."],
          ["marks_obtained", "m", "Meaningful names are easier to revise and debug."]
        ]
      },
      {
        kind: "callout",
        title: "Exam rule",
        text: "Use lowercase words separated by underscores for normal variables: `student_marks`, `total_price`, `secret_number`."
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Python names are dynamic",
    kicker: "Variables 04",
    lead: "Python variables do not permanently lock one type. The value has the type; the name can be rebound to another value.",
    sections: [
      {
        kind: "code",
        title: "The value decides the type",
        code: `data = 42
print(type(data))      # <class 'int'>

data = "forty two"
print(type(data))      # <class 'str'>`
      },
      {
        kind: "points",
        title: "What to remember",
        items: [
          "`type()` reveals what Python currently sees.",
          "Changing the type of the same name is legal, but overusing it can confuse readers.",
          "Use separate names when the meaning changes: `age_text` then `age` after conversion."
        ]
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Reassignment changes state",
    kicker: "Variables 05",
    lead: "Programs become useful when variables update: counters grow, totals accumulate, and user choices replace default values.",
    sections: [
      {
        kind: "code",
        title: "Counter and accumulator",
        code: `attempts = 0
total = 0

attempts = attempts + 1
total = total + 85

attempts += 1
total += 90

print(attempts, total)  # 2 175`
      },
      {
        kind: "points",
        title: "Patterns",
        items: [
          "Counter: starts at 0 and increases by 1 or another fixed amount.",
          "Accumulator: starts at 0 and keeps adding values.",
          "Flag: starts as `False` and changes to `True` when something is found."
        ]
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Assign multiple values carefully",
    kicker: "Variables 06",
    lead: "Python can bind many names in one line. This is useful when the values are clearly related.",
    sections: [
      {
        kind: "code",
        title: "Multiple assignment",
        code: `x, y = 10, 20
name, age, city = "Yash", 18, "Patna"

# Swap without a temporary variable
x, y = y, x

print(x, y)  # 20 10`
      },
      {
        kind: "points",
        title: "Use it when",
        items: [
          "The variables belong to one small idea, such as coordinates or profile fields.",
          "You are unpacking a known structure, such as `name, marks = record`.",
          "Avoid long unpacking lines because they become hard to scan in tests."
        ]
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Constants are a convention",
    kicker: "Variables 07",
    lead: "Python does not force constants, but programmers use uppercase names to signal that a value should not change.",
    sections: [
      {
        kind: "code",
        title: "Readable constants",
        code: `PASS_MARKS = 35
MAX_ATTEMPTS = 3
TAX_RATE = 0.18

marks = 42
passed = marks >= PASS_MARKS

print(passed)`
      },
      {
        kind: "points",
        title: "Best use",
        items: [
          "Put important repeated values in one named place.",
          "Names like `MAX_ATTEMPTS` are easier to understand than unexplained numbers like `3`.",
          "If the number changes later, update the constant once instead of hunting through the program."
        ]
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Common variable mistakes",
    kicker: "Variables 08",
    lead: "Most beginner variable errors come from names that are invalid, misspelled, or used before assignment.",
    sections: [
      {
        kind: "table",
        headers: ["Mistake", "Example", "Fix"],
        rows: [
          ["Using before assigning", "print(total) before `total = 0`", "Create the variable first."],
          ["Misspelling", "`student_mark` vs `student_marks`", "Use clear names and check spelling."],
          ["Keyword as name", "`class = 10`", "Use `class_` or another name."],
          ["Invalid character", "`total-marks = 80`", "Use `total_marks`."],
          ["Meaning drift", "`data` changes from text to number", "Use `data_text` and `data_number`."]
        ]
      },
      {
        kind: "practice",
        title: "Quick check",
        question: "Why is `2nd_place = 'Yash'` invalid?",
        answer: "A Python variable name cannot start with a digit. Use `second_place` or `place_2`."
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Mini program: profile card",
    kicker: "Variables 09",
    lead: "Variables let you store a user profile once, then reuse it in output and calculations.",
    sections: [
      {
        kind: "code",
        title: "Profile revision example",
        code: `student_name = "Yash"
course = "AIM101"
marks = 87
max_marks = 100

percentage = (marks / max_marks) * 100

print(f"Name: {student_name}")
print(f"Course: {course}")
print(f"Score: {percentage:.1f}%")`
      },
      {
        kind: "points",
        title: "What this tests",
        items: [
          "Naming variables clearly.",
          "Using numeric variables inside calculations.",
          "Using f-strings to present stored values."
        ]
      }
    ]
  },
  {
    topic: "Variables",
    slug: "variables",
    title: "Variables revision sheet",
    kicker: "Variables 10",
    lead: "Use this as the last-minute checklist before a test question on variables.",
    sections: [
      {
        kind: "summary",
        items: [
          ["Definition", "A variable is a name bound to a value."],
          ["Assignment", "`name = value` is read right to left."],
          ["Naming", "Use lowercase_with_underscores; avoid keywords, spaces, and hyphens."],
          ["Dynamic type", "The value has the type; a name can be rebound."],
          ["Debugging", "Use `print()` and `type()` when a value behaves unexpectedly."],
          ["Common patterns", "Counters, accumulators, flags, constants, and profile fields."]
        ]
      }
    ]
  },

  {
    topic: "Data Types",
    slug: "data-types",
    title: "Types decide what operations mean",
    kicker: "Data Types 01",
    lead: "The same symbol can behave differently depending on type. That is the core truth from the notes: types matter.",
    sections: [
      {
        kind: "compare",
        leftTitle: "Numbers",
        leftText: "`5 + 3` means arithmetic addition and gives `8`.",
        rightTitle: "Strings",
        rightText: "`'5' + '3'` means join text and gives `'53'`."
      },
      {
        kind: "code",
        title: "Quotes change everything",
        code: `print(5 + 3)       # 8
print("5" + "3")   # 53

print(type(5))      # int
print(type("5"))    # str`
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "The four beginner types",
    kicker: "Data Types 02",
    lead: "Your notes focus on four fundamental types: integers, floats, strings, and booleans.",
    sections: [
      {
        kind: "table",
        headers: ["Type", "Meaning", "Example", "Use"],
        rows: [
          ["int", "Whole number", "25", "Age, count, attempts"],
          ["float", "Decimal number", "99.5", "Price, percentage, temperature"],
          ["str", "Text", "\"Raj\"", "Names, messages, input text"],
          ["bool", "Truth value", "True", "Conditions, flags, validation"]
        ]
      },
      {
        kind: "callout",
        title: "Debugging habit",
        text: "When output is surprising, ask Python directly: `type(value)`."
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Integers and floats handle numbers",
    kicker: "Data Types 03",
    lead: "Use `int` for exact whole counts and `float` for decimal measurements. Do not store numbers as text if you need math.",
    sections: [
      {
        kind: "code",
        title: "Numeric operations",
        code: `marks = 87
total = 100
percentage = (marks / total) * 100

print(percentage)       # 87.0
print(type(marks))      # int
print(type(percentage)) # float`
      },
      {
        kind: "points",
        title: "Operator meanings",
        items: [
          "`+`, `-`, `*`, `/` do normal arithmetic on numbers.",
          "`//` gives floor division, `%` gives remainder, and `**` gives power.",
          "Division with `/` gives a float even when the answer looks whole."
        ]
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Strings store text",
    kicker: "Data Types 04",
    lead: "A string is a sequence of characters. Digits inside quotes are still text.",
    sections: [
      {
        kind: "code",
        title: "String basics",
        code: `name = "Yash"
roll_text = "101"

print(name[0])       # Y
print(name.lower())  # yash
print(len(name))     # 4
print(roll_text + "A")`
      },
      {
        kind: "points",
        title: "String facts",
        items: [
          "Indexing starts from 0: `name[0]` is the first character.",
          "Strings are immutable: methods like `.lower()` return a new string.",
          "Use `.strip()` to remove accidental spaces from user input."
        ]
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Booleans answer yes or no",
    kicker: "Data Types 05",
    lead: "`True` and `False` are used in comparisons, validation, and program decisions.",
    sections: [
      {
        kind: "code",
        title: "Boolean results",
        code: `age = 18
has_id = True

print(age >= 18)              # True
print(age >= 18 and has_id)   # True
print(not has_id)             # False`
      },
      {
        kind: "table",
        headers: ["Operator", "Meaning", "Example"],
        rows: [
          ["==", "equal to", "5 == 5 -> True"],
          ["!=", "not equal", "5 != 3 -> True"],
          [">", "greater than", "5 > 3 -> True"],
          ["<", "less than", "5 < 3 -> False"],
          [">=", "greater or equal", "5 >= 5 -> True"],
          ["<=", "less or equal", "5 <= 3 -> False"]
        ]
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Convert explicitly",
    kicker: "Data Types 06",
    lead: "Python refuses to guess when types do not match. Use conversion functions intentionally.",
    sections: [
      {
        kind: "code",
        title: "Conversion functions",
        code: `age_text = "18"
price_text = "99.50"

age = int(age_text)
price = float(price_text)

print(age + 2)       # 20
print(str(price))    # "99.5"`
      },
      {
        kind: "points",
        title: "Safe conversion",
        items: [
          "Use `int()` only when the text represents a whole number.",
          "Use `float()` when decimal input is allowed.",
          "Use `str()` when you need to join a value into text."
        ]
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Mixed types create errors",
    kicker: "Data Types 07",
    lead: "Some mixed operations are blocked because Python will not silently change your meaning.",
    sections: [
      {
        kind: "code",
        title: "Beginner error",
        code: `age = input("Age: ")   # user types 18

# Wrong:
# print(age + 1)

# Correct:
age = int(age)
print(age + 1)`
      },
      {
        kind: "practice",
        title: "Quick check",
        question: "What is the result of `\"10\" + \"5\"`?",
        answer: "The result is the string `\"105\"`, not the number `15`, because both values are text."
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Float values are approximations",
    kicker: "Data Types 08",
    lead: "Floats are perfect for measurements, but many decimal fractions cannot be represented exactly by binary hardware.",
    sections: [
      {
        kind: "code",
        title: "Classic float surprise",
        code: `total = 0.1 + 0.2
print(total)          # 0.30000000000000004
print(f"{total:.2f}") # 0.30`
      },
      {
        kind: "points",
        title: "Test rule",
        items: [
          "For display, format floats with f-strings such as `{value:.2f}`.",
          "For exact money calculations later, learn `Decimal`.",
          "For beginner programs, round only at output time unless the question asks otherwise."
        ]
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Choose the right type before coding",
    kicker: "Data Types 09",
    lead: "A good type choice makes later logic simple. A wrong type choice creates extra conversion everywhere.",
    sections: [
      {
        kind: "table",
        headers: ["Data", "Best type", "Why"],
        rows: [
          ["Student name", "str", "Names are text, not calculations."],
          ["Number of attempts", "int", "It is a whole count."],
          ["Percentage", "float", "It can contain decimals."],
          ["Login success", "bool", "Only yes or no is needed."],
          ["Phone number", "str", "Leading zeroes and symbols matter more than math."]
        ]
      },
      {
        kind: "callout",
        title: "NASA lesson",
        text: "The Mars Climate Orbiter failed because unit meaning was not handled correctly. In programs, value plus meaning matters."
      }
    ]
  },
  {
    topic: "Data Types",
    slug: "data-types",
    title: "Data types revision sheet",
    kicker: "Data Types 10",
    lead: "Use this as the final scan before a type question.",
    sections: [
      {
        kind: "summary",
        items: [
          ["int", "Whole numbers: count, attempts, age in years."],
          ["float", "Decimal numbers: percentage, price, measurement."],
          ["str", "Text: names, messages, raw `input()` values."],
          ["bool", "`True` or `False`: comparisons and flags."],
          ["Conversion", "`int()`, `float()`, `str()`, `bool()` change representation when valid."],
          ["Core warning", "`5 + 3` is `8`; `'5' + '3'` is `'53'`."]
        ]
      }
    ]
  },

  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "I/O is a conversation",
    kicker: "Basic I/O 01",
    lead: "`print()` lets the computer speak. `input()` lets the user reply. Most beginner programs are a loop of output, input, processing, output.",
    sections: [
      {
        kind: "compare",
        leftTitle: "Output",
        leftText: "`print()` displays information for the user or for debugging.",
        rightTitle: "Input",
        rightText: "`input()` pauses the program, shows a prompt, and returns what the user typed as a string."
      },
      {
        kind: "code",
        title: "First conversation",
        code: `print("Welcome")
name = input("Enter your name: ")
print(f"Hello, {name}")`
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "print() displays values",
    kicker: "Basic I/O 02",
    lead: "`print()` can show text, variables, calculations, and multiple values separated by spaces.",
    sections: [
      {
        kind: "code",
        title: "Print patterns",
        code: `name = "Yash"
marks = 87

print("Name:", name)
print("Marks:", marks)
print("Next target:", marks + 5)
print("Python", "is", "ready")`
      },
      {
        kind: "points",
        title: "Remember",
        items: [
          "A comma in `print()` adds a space between values.",
          "Use f-strings when the output needs a clean sentence.",
          "Use `print()` while debugging to inspect values step by step."
        ]
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "input() always returns a string",
    kicker: "Basic I/O 03",
    lead: "This is one of the most common beginner mistakes. Even if the user types digits, Python gives you text first.",
    sections: [
      {
        kind: "code",
        title: "Inspect input",
        code: `age = input("Age: ")

print(age)
print(type(age))  # <class 'str'>`
      },
      {
        kind: "callout",
        title: "Critical warning",
        text: "Before math, convert input with `int()` or `float()`."
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "Convert input before math",
    kicker: "Basic I/O 04",
    lead: "The safest pattern is: receive text, clean it, convert it, then calculate.",
    sections: [
      {
        kind: "code",
        title: "Input conversion pattern",
        code: `marks_text = input("Marks: ").strip()
max_text = input("Max marks: ").strip()

marks = float(marks_text)
max_marks = float(max_text)

percentage = (marks / max_marks) * 100
print(f"Percentage: {percentage:.2f}%")`
      },
      {
        kind: "points",
        title: "Why this works",
        items: [
          "`.strip()` removes accidental spaces.",
          "`float()` allows decimal marks if needed.",
          "The f-string formats the final number cleanly."
        ]
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "Clean text input",
    kicker: "Basic I/O 05",
    lead: "Users type extra spaces and mixed case. String methods make input easier to compare.",
    sections: [
      {
        kind: "code",
        title: "Clean command text",
        code: `choice = input("Continue? yes/no: ")
choice = choice.strip().lower()

if choice == "yes":
    print("Continuing")
else:
    print("Stopping")`
      },
      {
        kind: "points",
        title: "Useful methods",
        items: [
          "`.strip()` removes spaces at both ends.",
          "`.lower()` makes comparison case-insensitive.",
          "`.split()` breaks a sentence into a list of words."
        ]
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "F-strings insert variables cleanly",
    kicker: "Basic I/O 06",
    lead: "F-strings are the clean output style from the notes. Start the string with `f`, then place expressions inside braces.",
    sections: [
      {
        kind: "code",
        title: "F-string pattern",
        code: `name = "Yash"
age = 18

print(f"{name} is {age} years old.")
print(f"Next year: {age + 1}")
print(f"Name length: {len(name)}")`
      },
      {
        kind: "points",
        title: "Exam points",
        items: [
          "The `f` prefix is required.",
          "Variables and expressions go inside `{}`.",
          "F-strings avoid messy manual conversion for display."
        ]
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "Format numbers for professional output",
    kicker: "Basic I/O 07",
    lead: "Tests often expect clean decimals. F-string format specifiers control how numbers appear.",
    sections: [
      {
        kind: "code",
        title: "Decimal formatting",
        code: `price = 99.5
tax = 0.18
final_price = price + (price * tax)

print(f"Price: {price:.2f}")
print(f"Final: {final_price:.2f}")`
      },
      {
        kind: "table",
        headers: ["Format", "Meaning", "Example"],
        rows: [
          ["{value:.0f}", "0 decimal places", "88"],
          ["{value:.1f}", "1 decimal place", "87.5"],
          ["{value:.2f}", "2 decimal places", "87.50"],
          ["{value:.2%}", "percentage style", "0.875 -> 87.50%"]
        ]
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "Build one complete interaction",
    kicker: "Basic I/O 08",
    lead: "A strong beginner program has a prompt, conversion, calculation, and a final readable message.",
    sections: [
      {
        kind: "code",
        title: "Marks calculator",
        code: `name = input("Student name: ").strip()
marks = float(input("Marks obtained: "))
total = float(input("Total marks: "))

percentage = (marks / total) * 100

print(f"{name} scored {percentage:.2f}%")`
      },
      {
        kind: "points",
        title: "What this tests",
        items: [
          "Input prompts are clear.",
          "Numeric inputs are converted before calculation.",
          "The final output is readable and formatted."
        ]
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "Handle invalid input carefully",
    kicker: "Basic I/O 09",
    lead: "When conversion fails, Python raises an error. In beginner tests, show the correct pattern even if full exception handling is not required.",
    sections: [
      {
        kind: "code",
        title: "Validation pattern",
        code: `age_text = input("Age: ").strip()

if age_text.isdigit():
    age = int(age_text)
    print(f"Next year you will be {age + 1}")
else:
    print("Please enter digits only.")`
      },
      {
        kind: "practice",
        title: "Quick check",
        question: "Why can `int('18')` work but `int('18.5')` fail?",
        answer: "`int()` expects whole-number text. Use `float('18.5')` if decimals are allowed."
      }
    ]
  },
  {
    topic: "Basic I/O",
    slug: "basic-io",
    title: "Basic I/O revision sheet",
    kicker: "Basic I/O 10",
    lead: "Use this checklist for any input-output program.",
    sections: [
      {
        kind: "summary",
        items: [
          ["print()", "Displays values, text, calculations, or debugging output."],
          ["input()", "Reads user input and always returns a string."],
          ["Clean", "Use `.strip()` and sometimes `.lower()` before comparing text."],
          ["Convert", "Use `int()` or `float()` before math."],
          ["Format", "Use f-strings: `f'{name}: {score:.2f}'`."],
          ["Validate", "Check user input before conversion when possible."]
        ]
      }
    ]
  },

  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Fluency means a reliable workflow",
    kicker: "Coding Fluency 01",
    lead: "Coding fluency is not memorizing every line. It is knowing how to set up, write, run, read errors, and improve small programs.",
    sections: [
      {
        kind: "points",
        title: "Your notes start here",
        items: [
          "Verify the environment: terminal, Python version, and notebook/browser if used.",
          "Build programs in small steps instead of writing everything at once.",
          "Use `print()` and `type()` to check what Python sees."
        ]
      },
      {
        kind: "code",
        title: "60-second check",
        code: `python --version

# In Python:
print("ready")
print(type(3.12))`
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Use the right place to code",
    kicker: "Coding Fluency 02",
    lead: "Terminal, scripts, and notebooks are all useful. Choose based on the task.",
    sections: [
      {
        kind: "table",
        headers: ["Tool", "Best for", "Risk"],
        rows: [
          ["REPL / shell", "Trying one expression quickly", "Work disappears if not saved."],
          ["Python file", "Programs you will run again", "Needs clear file names and saved changes."],
          ["Notebook", "Learning, notes, experiments", "Cells can run out of order."],
          ["Editor", "Writing and improving real code", "Run often so errors stay small."]
        ]
      },
      {
        kind: "callout",
        title: "Fluency rule",
        text: "Do not wait until the end to run code. Run after each meaningful step."
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Plan, code, run, inspect",
    kicker: "Coding Fluency 03",
    lead: "The fastest workflow is a loop: decide the next small behavior, code it, run it, inspect output, then continue.",
    sections: [
      {
        kind: "points",
        title: "Four-step loop",
        items: [
          "Plan: write the next tiny goal in plain English.",
          "Code: add only the lines needed for that goal.",
          "Run: execute the program immediately.",
          "Inspect: compare the output with what you expected."
        ]
      },
      {
        kind: "code",
        title: "Example tiny goal",
        code: `# Goal: ask for two marks and print total
first = int(input("First marks: "))
second = int(input("Second marks: "))

total = first + second
print(f"Total: {total}")`
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Read errors from bottom upward",
    kicker: "Coding Fluency 04",
    lead: "Python tracebacks look scary, but the final line usually names the error type and reason.",
    sections: [
      {
        kind: "table",
        headers: ["Error", "Meaning", "Common fix"],
        rows: [
          ["NameError", "A name is not defined", "Check spelling or assign before use."],
          ["TypeError", "Wrong type for an operation", "Convert or choose a compatible operation."],
          ["ValueError", "Right type, invalid value", "Validate input before conversion."],
          ["SyntaxError", "Python cannot parse the code", "Check missing quotes, brackets, or colons."],
          ["IndentationError", "Spaces do not form a valid block", "Use consistent 4-space indentation."]
        ]
      },
      {
        kind: "practice",
        title: "Quick check",
        question: "What error is likely from `print(total)` before `total = 0`?",
        answer: "NameError, because Python has not seen a value bound to the name `total` yet."
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Debug with print, type, and repr",
    kicker: "Coding Fluency 05",
    lead: "Before changing many lines, inspect the exact value and type that caused the problem.",
    sections: [
      {
        kind: "code",
        title: "Inspect hidden spaces",
        code: `raw_name = input("Name: ")

print(raw_name)
print(type(raw_name))
print(repr(raw_name))

clean_name = raw_name.strip()
print(repr(clean_name))`
      },
      {
        kind: "points",
        title: "Why `repr()` helps",
        items: [
          "It reveals quotes, spaces, and escape characters.",
          "It is useful when output looks correct but comparisons fail.",
          "It pairs well with `.strip()` during input cleanup."
        ]
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Write readable code first",
    kicker: "Coding Fluency 06",
    lead: "Readable code is easier to fix. PEP 8 recommends lowercase variable names with underscores for normal variables and functions.",
    sections: [
      {
        kind: "compare",
        leftTitle: "Hard to read",
        leftText: "`x= input('m')`; `y=float(x)`; `z=y/100` hides meaning.",
        rightTitle: "Better",
        rightText: "`marks_text`, `marks`, and `percentage` explain the program."
      },
      {
        kind: "code",
        title: "Readable version",
        code: `marks_text = input("Marks: ").strip()
marks = float(marks_text)
percentage = marks / 100

print(f"Percentage: {percentage:.2%}")`
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Comment the why, not the obvious",
    kicker: "Coding Fluency 07",
    lead: "Comments should explain decisions that are not obvious from the code. Clear names reduce the need for comments.",
    sections: [
      {
        kind: "compare",
        leftTitle: "Weak comment",
        leftText: "`# add one` before `count += 1` repeats the code.",
        rightTitle: "Useful comment",
        rightText: "`# One attempt used even if the guess is invalid` explains policy."
      },
      {
        kind: "points",
        title: "Comment rules",
        items: [
          "Use comments for reasoning, assumptions, or edge cases.",
          "Do not comment every line in a simple program.",
          "Keep comments updated when the code changes."
        ]
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Test with normal and edge inputs",
    kicker: "Coding Fluency 08",
    lead: "A program that works only for one perfect input is not reliable. Test a small set of cases.",
    sections: [
      {
        kind: "table",
        headers: ["Case", "Example", "Expected check"],
        rows: [
          ["Normal", "marks = 87", "Correct percentage prints."],
          ["Boundary", "marks = 0 or 100", "No strange output."],
          ["Spaces", "\" 87 \"", "Input cleanup works."],
          ["Wrong text", "\"eighty\"", "Program does not crash if validation is included."],
          ["Decimal", "87.5", "Use `float()` when decimal is allowed."]
        ]
      },
      {
        kind: "callout",
        title: "Quality control",
        text: "Small tests after each function or block catch mistakes while the code is still easy to fix."
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Keep programs small and named",
    kicker: "Coding Fluency 09",
    lead: "As programs grow, break repeated logic into small functions with clear names.",
    sections: [
      {
        kind: "code",
        title: "Small function",
        code: `def calculate_percentage(marks, total):
    return (marks / total) * 100

score = calculate_percentage(87, 100)
print(f"{score:.2f}%")`
      },
      {
        kind: "points",
        title: "Function benefits",
        items: [
          "One name explains a multi-step idea.",
          "The same logic can be reused.",
          "Small functions are easier to test with different inputs."
        ]
      }
    ]
  },
  {
    topic: "Coding Fluency",
    slug: "coding-fluency",
    title: "Coding fluency revision sheet",
    kicker: "Coding Fluency 10",
    lead: "Use this as a practical checklist while writing any Python answer.",
    sections: [
      {
        kind: "summary",
        items: [
          ["Verify", "Check Python version, terminal, editor, and notebook if needed."],
          ["Run often", "Test after each meaningful step."],
          ["Inspect", "Use `print()`, `type()`, and `repr()` for surprises."],
          ["Read errors", "Look at the last traceback line first."],
          ["Style", "Use clear snake_case variable names."],
          ["Test", "Try normal, boundary, spaced, and invalid input."]
        ]
      }
    ]
  },

  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Data structures organize many values",
    kicker: "Data Structures 01",
    lead: "Your notes ask: how do you store 1000 student names? Not with 1000 variables. Use a structure.",
    sections: [
      {
        kind: "compare",
        leftTitle: "Bad approach",
        leftText: "`student1`, `student2`, `student3`, ... becomes impossible to loop, search, or update cleanly.",
        rightTitle: "Good approach",
        rightText: "`students = ['Asha', 'Raj', 'Yash']` stores related values in one object."
      },
      {
        kind: "points",
        title: "Four structures",
        items: [
          "List: ordered and mutable.",
          "Tuple: ordered and immutable.",
          "Dictionary: key-value mapping.",
          "Set: unique unordered values."
        ]
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Lists are ordered and mutable",
    kicker: "Data Structures 02",
    lead: "A list works like a shopping cart: items stay in order and can be changed.",
    sections: [
      {
        kind: "code",
        title: "List basics",
        code: `marks = [87, 92, 76]

print(marks[0])      # 87
marks.append(90)
marks[1] = 95

print(marks)         # [87, 95, 76, 90]`
      },
      {
        kind: "points",
        title: "List facts",
        items: [
          "Ordered: the position of items matters.",
          "Mutable: you can add, remove, and replace items.",
          "Indexed: first item is at index 0."
        ]
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Indexing and slicing select parts",
    kicker: "Data Structures 03",
    lead: "Indexes pick one item. Slices pick a range and return a new list.",
    sections: [
      {
        kind: "code",
        title: "Access patterns",
        code: `names = ["Asha", "Raj", "Yash", "Neha"]

print(names[0])      # Asha
print(names[-1])     # Neha
print(names[1:3])    # ['Raj', 'Yash']
print(names[:2])     # ['Asha', 'Raj']
print(names[2:])     # ['Yash', 'Neha']`
      },
      {
        kind: "points",
        title: "Slice rule",
        items: [
          "`start` is included.",
          "`stop` is excluded.",
          "Missing start means from the beginning; missing stop means to the end."
        ]
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "List methods change or inspect lists",
    kicker: "Data Structures 04",
    lead: "List methods are built-in tools. Choose the method that matches the action.",
    sections: [
      {
        kind: "table",
        headers: ["Method", "Use", "Example"],
        rows: [
          ["append(x)", "Add to end", "marks.append(90)"],
          ["insert(i, x)", "Add at position", "names.insert(0, 'Aman')"],
          ["remove(x)", "Remove first matching value", "names.remove('Raj')"],
          ["pop()", "Remove and return last item", "last = names.pop()"],
          ["sort()", "Sort in place", "marks.sort()"],
          ["count(x)", "Count occurrences", "names.count('Yash')"]
        ]
      },
      {
        kind: "practice",
        title: "Quick check",
        question: "Which method adds one item to the end of a list?",
        answer: "`append()` adds one item to the end of a list."
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Tuples protect fixed records",
    kicker: "Data Structures 05",
    lead: "A tuple is ordered like a list, but immutable. Use it when the collection should not change.",
    sections: [
      {
        kind: "code",
        title: "Tuple example",
        code: `student = ("Yash", 87, "AIM101")

name = student[0]
marks = student[1]
course = student[2]

print(name, marks, course)`
      },
      {
        kind: "points",
        title: "Use tuples for",
        items: [
          "Fixed pairs like `(x, y)` coordinates.",
          "Records returned from a function.",
          "Values that should not be accidentally edited."
        ]
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Dictionaries map keys to values",
    kicker: "Data Structures 06",
    lead: "A dictionary is best when each value has a label: name, age, course, marks.",
    sections: [
      {
        kind: "code",
        title: "Dictionary basics",
        code: `student = {
    "name": "Yash",
    "course": "AIM101",
    "marks": 87
}

print(student["name"])
student["marks"] = 90
student["city"] = "Patna"

print(student)`
      },
      {
        kind: "points",
        title: "Dictionary facts",
        items: [
          "Keys are used for lookup.",
          "Values can be any type.",
          "A key should be unique inside the dictionary."
        ]
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Sets keep unique values",
    kicker: "Data Structures 07",
    lead: "A set removes duplicates and is useful for membership checks.",
    sections: [
      {
        kind: "code",
        title: "Set example",
        code: `subjects = {"python", "math", "python", "ai"}

print(subjects)          # duplicates removed
print("python" in subjects)

subjects.add("statistics")
subjects.remove("math")

print(subjects)`
      },
      {
        kind: "points",
        title: "Set facts",
        items: [
          "Unordered: do not rely on position.",
          "Unique: duplicates collapse into one value.",
          "Fast for checking whether an item is present."
        ]
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Choose by question shape",
    kicker: "Data Structures 08",
    lead: "The fastest way to choose a structure is to ask what operation matters most.",
    sections: [
      {
        kind: "table",
        headers: ["Question", "Use", "Reason"],
        rows: [
          ["Need order and edits?", "list", "Lists preserve order and can change."],
          ["Need fixed record?", "tuple", "Tuples protect values from accidental edits."],
          ["Need lookup by label?", "dict", "Dictionaries connect keys to values."],
          ["Need only unique items?", "set", "Sets remove duplicates automatically."],
          ["Need many students with fields?", "list of dicts", "Each dict is one student record."]
        ]
      },
      {
        kind: "callout",
        title: "Exam shortcut",
        text: "If the question says names by roll number or marks by subject, think dictionary first."
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Combine structures for real data",
    kicker: "Data Structures 09",
    lead: "Real programs usually combine structures: a list of dictionaries is common for tables of records.",
    sections: [
      {
        kind: "code",
        title: "List of dictionaries",
        code: `students = [
    {"name": "Asha", "marks": 91},
    {"name": "Raj", "marks": 78},
    {"name": "Yash", "marks": 87}
]

for student in students:
    print(f"{student['name']}: {student['marks']}")`
      },
      {
        kind: "points",
        title: "Why this is strong",
        items: [
          "The list keeps all student records together.",
          "Each dictionary keeps one student's fields labeled.",
          "A loop can process every record without separate variables."
        ]
      }
    ]
  },
  {
    topic: "Data Structures",
    slug: "data-structures",
    title: "Data structures revision sheet",
    kicker: "Data Structures 10",
    lead: "Use this final sheet to pick the correct structure quickly.",
    sections: [
      {
        kind: "summary",
        items: [
          ["List", "Ordered, mutable, indexed: `marks = [87, 92]`."],
          ["Tuple", "Ordered, immutable: `point = (10, 20)`."],
          ["Dictionary", "Key-value lookup: `student['marks']`."],
          ["Set", "Unique unordered items: `{'python', 'ai'}`."],
          ["Indexing", "First item is index 0; last item can be -1."],
          ["Slicing", "`items[start:stop]` includes start and excludes stop."]
        ]
      }
    ]
  }
];

const deck = document.getElementById("deck");
const topicMenu = document.getElementById("topic-menu");
const currentTopic = document.getElementById("current-topic");
const slideCounter = document.getElementById("slide-counter");
const progressFill = document.getElementById("progress-fill");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const quizButton = document.getElementById("quiz-button");
const toast = document.getElementById("toast");

let activeIndex = 0;
let toastTimer = 0;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineFormat(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code class=\"inline-code\">$1</code>");
}

function renderSection(section) {
  if (section.kind === "points") {
    return `
      <article class="panel animate delay-2">
        <h3>${inlineFormat(section.title)}</h3>
        <ul class="points">
          ${section.items.map((item) => `<li>${inlineFormat(item)}</li>`).join("")}
        </ul>
      </article>
    `;
  }

  if (section.kind === "code") {
    return `
      <article class="code-panel animate delay-3">
        <div class="code-title"><span>${inlineFormat(section.title)}</span><span>PY</span></div>
        <pre><code>${escapeHtml(section.code)}</code></pre>
      </article>
    `;
  }

  if (section.kind === "compare") {
    return `
      <div class="big-example animate delay-2">
        <article class="example-side">
          <strong>${inlineFormat(section.leftTitle)}</strong>
          <span>${inlineFormat(section.leftText)}</span>
        </article>
        <div class="example-divider">VS</div>
        <article class="example-side">
          <strong>${inlineFormat(section.rightTitle)}</strong>
          <span>${inlineFormat(section.rightText)}</span>
        </article>
      </div>
    `;
  }

  if (section.kind === "table") {
    return `
      <article class="table-panel animate delay-2">
        <table>
          <thead>
            <tr>${section.headers.map((head) => `<th>${inlineFormat(head)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${section.rows.map((row) => `
              <tr>${row.map((cell) => `<td>${inlineFormat(cell)}</td>`).join("")}</tr>
            `).join("")}
          </tbody>
        </table>
      </article>
    `;
  }

  if (section.kind === "callout") {
    return `
      <article class="callout animate delay-3">
        <strong>${inlineFormat(section.title)}</strong>
        <span>${inlineFormat(section.text)}</span>
      </article>
    `;
  }

  if (section.kind === "practice") {
    return `
      <article class="practice-panel animate delay-3">
        <h3>${inlineFormat(section.title)}</h3>
        <p>${inlineFormat(section.question)}</p>
        <button class="answer-toggle" type="button">Reveal answer</button>
        <div class="answer">${inlineFormat(section.answer)}</div>
      </article>
    `;
  }

  if (section.kind === "summary") {
    return `
      <article class="summary-panel animate delay-2">
        <ul class="revision-list">
          ${section.items.map(([title, text]) => `
            <li><strong>${inlineFormat(title)}</strong>${inlineFormat(text)}</li>
          `).join("")}
        </ul>
      </article>
    `;
  }

  return "";
}

function renderSlide(slide, index) {
  const number = String(index + 1).padStart(2, "0");
  const imageMarkup = slide.image
    ? `<img class="topic-image animate delay-3" src="${escapeHtml(slide.image)}" alt="Python test topics">`
    : "";

  const sectionMarkup = slide.sections.map(renderSection).join("");
  const gridClass = slide.sections.length === 1 ? "content-grid single" : "content-grid";
  const bodyMarkup = slide.image
    ? `<div class="image-panel"><div class="${gridClass}">${sectionMarkup}</div>${imageMarkup}</div>`
    : `<div class="${gridClass}">${sectionMarkup}</div>`;

  return `
    <article class="slide topic-${slide.slug}" data-index="${index}" data-topic="${escapeHtml(slide.topic)}">
      <div class="slide-inner">
        <div class="slide-title-row animate delay-1">
          <div>
            <p class="kicker">${inlineFormat(slide.kicker)}</p>
            <h1>${inlineFormat(slide.title)}</h1>
          </div>
          <span class="page-no">${number}</span>
        </div>
        <p class="lead animate delay-2">${inlineFormat(slide.lead)}</p>
        ${bodyMarkup}
      </div>
    </article>
  `;
}

function buildDeck() {
  deck.innerHTML = slides.map(renderSlide).join("");
  topicMenu.innerHTML = topicMeta.map((topic) => `
    <button class="topic-tab" type="button" data-topic="${topic.name}">${topic.name}</button>
  `).join("");
}

function scrollToSlide(index) {
  const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
  deck.children[safeIndex].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}

function updateUi(index) {
  activeIndex = index;
  const slide = slides[index];
  const percent = ((index + 1) / slides.length) * 100;

  currentTopic.textContent = slide.topic;
  slideCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${slides.length}`;
  progressFill.style.width = `${percent}%`;

  document.querySelectorAll(".slide").forEach((el, i) => {
    el.classList.toggle("is-active", i === index);
  });

  document.querySelectorAll(".topic-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.topic === slide.topic);
  });

  prevButton.disabled = index === 0;
  nextButton.disabled = index === slides.length - 1;
}

function nearestSlideIndex() {
  return Math.round(deck.scrollLeft / Math.max(1, window.innerWidth));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function setupInteractions() {
  let ticking = false;

  deck.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateUi(nearestSlideIndex());
      ticking = false;
    });
  }, { passive: true });

  prevButton.addEventListener("click", () => scrollToSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => scrollToSlide(activeIndex + 1));

  topicMenu.addEventListener("click", (event) => {
    const tab = event.target.closest(".topic-tab");
    if (!tab) return;
    const index = slides.findIndex((slide) => slide.topic === tab.dataset.topic);
    if (index >= 0) scrollToSlide(index);
  });

  deck.addEventListener("click", (event) => {
    const button = event.target.closest(".answer-toggle");
    if (!button) return;
    const answer = button.nextElementSibling;
    answer.classList.toggle("visible");
    button.textContent = answer.classList.contains("visible") ? "Hide answer" : "Reveal answer";
  });

  quizButton.addEventListener("click", () => {
    const url = QUIZ_LINK.trim();
    if (!url) {
      showToast("Quiz link placeholder is empty in script.js line 2.");
      return;
    }
    window.location.href = url;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") scrollToSlide(activeIndex + 1);
    if (event.key === "ArrowLeft") scrollToSlide(activeIndex - 1);
  });

  window.addEventListener("resize", () => {
    updateUi(nearestSlideIndex());
  }, { passive: true });
}

buildDeck();
setupInteractions();
updateUi(0);

/* Interactive background: adapted ripple field from the provided birthday website code. */
(function initRippleField() {
  const canvas = document.getElementById("beam-canvas");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: true })
    || canvas.getContext("experimental-webgl", { alpha: true, premultipliedAlpha: false });

  if (!gl) {
    canvas.style.background = "linear-gradient(135deg, rgba(77,208,199,0.12), rgba(255,111,97,0.08))";
    return;
  }

  const vsSource = `
    attribute vec2 a_pos;
    void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
  `;

  const fsSource = `
    precision highp float;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec4 u_ripples[8];
    uniform int u_rippleCount;
    uniform vec2 u_mouse;
    uniform float u_mouseActive;

    vec3 palette(float t){
      vec3 cyan = vec3(77.0,208.0,199.0)/255.0;
      vec3 amber = vec3(243.0,180.0,75.0)/255.0;
      vec3 coral = vec3(255.0,111.0,97.0)/255.0;
      vec3 violet = vec3(173.0,124.0,255.0)/255.0;
      t = fract(t);
      if(t < 0.33){
        return mix(cyan, amber, smoothstep(0.0, 1.0, t * 3.0));
      } else if(t < 0.66){
        return mix(amber, coral, smoothstep(0.0, 1.0, (t - 0.33) * 3.0));
      }
      return mix(coral, violet, smoothstep(0.0, 1.0, (t - 0.66) * 3.0));
    }

    void main(){
      vec2 uv = gl_FragCoord.xy;
      vec2 st = gl_FragCoord.xy / u_resolution.xy;
      float totalHeight = 0.0;
      float colorMix = 0.0;
      float weightSum = 0.0001;

      for(int i = 0; i < 8; i++){
        if(i >= u_rippleCount) break;
        vec4 r = u_ripples[i];
        vec2 center = r.xy;
        float age = u_time - r.z;
        float strength = r.w;
        if(age < 0.0 || age > 3.2) continue;

        float dist = distance(uv, center);
        float waveFront = age * 360.0;
        float band = dist - waveFront;
        float ring = exp(-abs(band) * 0.018) * exp(-age * 0.82);
        float ripple = sin(band * 0.062 - age * 4.2) * ring;

        totalHeight += ripple * strength;
        colorMix += (dist * 0.0024 + age * 0.34) * ring * strength;
        weightSum += ring * strength;
      }

      float hue = colorMix / weightSum + u_time * 0.018;
      vec3 col = palette(hue);
      float ambient = sin(st.x * 3.2 + u_time * 0.08) * cos(st.y * 2.2 - u_time * 0.06) * 0.5 + 0.5;
      vec3 ambientCol = palette(ambient * 0.42 + u_time * 0.012);
      float intensity = clamp(abs(totalHeight) * 1.65, 0.0, 1.0);
      vec3 finalCol = mix(ambientCol, col, intensity);
      float alpha = clamp(intensity * 0.62 + ambient * 0.055, 0.02, 0.42);

      if(u_mouseActive > 0.5){
        float md = distance(uv, u_mouse);
        float glow = exp(-md * 0.012) * 0.22;
        finalCol = mix(finalCol, palette(u_time * 0.025 + 0.5), glow * 0.75);
        alpha += glow;
      }

      gl_FragColor = vec4(finalCol, alpha);
    }
  `;

  function compile(type, src) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn("Shader compile error:", gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vs = compile(gl.VERTEX_SHADER, vsSource);
  const fs = compile(gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn("Program link error:", gl.getProgramInfoLog(program));
    return;
  }
  gl.useProgram(program);

  const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(program, "a_pos");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const uResolution = gl.getUniformLocation(program, "u_resolution");
  const uTime = gl.getUniformLocation(program, "u_time");
  const uRipples = gl.getUniformLocation(program, "u_ripples");
  const uRippleCount = gl.getUniformLocation(program, "u_rippleCount");
  const uMouse = gl.getUniformLocation(program, "u_mouse");
  const uMouseActive = gl.getUniformLocation(program, "u_mouseActive");

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  resize();
  window.addEventListener("resize", resize);

  const maxRipples = 8;
  let ripples = [];
  const startClock = performance.now();
  const mouse = { x: -9999, y: -9999, active: false };
  let lastMoveEmit = 0;

  function clockNow() {
    return (performance.now() - startClock) / 1000;
  }

  function pushRipple(clientX, clientY, strength) {
    const x = clientX * dpr;
    const y = (height - clientY) * dpr;
    ripples.push({ x, y, t: clockNow(), strength });
    if (ripples.length > maxRipples) ripples.shift();
  }

  function onPointerMove(event) {
    const point = event.touches ? event.touches[0] : event;
    const x = point.clientX;
    const y = point.clientY;
    mouse.x = x * dpr;
    mouse.y = (height - y) * dpr;
    mouse.active = true;

    const now = performance.now();
    if (now - lastMoveEmit > 70) {
      pushRipple(x, y, 0.7);
      lastMoveEmit = now;
    }
  }

  function onPointerDown(event) {
    const point = event.touches ? event.touches[0] : event;
    pushRipple(point.clientX, point.clientY, 1.8);
  }

  window.addEventListener("mousemove", onPointerMove, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("mousedown", onPointerDown, { passive: true });
  window.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("mouseleave", () => { mouse.active = false; });

  function ambientPulse() {
    if (document.hidden) return;
    pushRipple(Math.random() * width, Math.random() * height, 0.45);
  }

  const ambientInterval = setInterval(ambientPulse, 3600);
  setTimeout(ambientPulse, 400);

  function render() {
    const now = clockNow();
    ripples = ripples.filter((ripple) => now - ripple.t < 3.2);

    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform1f(uTime, now);
    gl.uniform1i(uRippleCount, Math.min(ripples.length, maxRipples));
    gl.uniform2f(uMouse, mouse.active ? mouse.x : -9999, mouse.active ? mouse.y : -9999);
    gl.uniform1f(uMouseActive, mouse.active ? 1.0 : 0.0);

    const flat = new Float32Array(maxRipples * 4);
    for (let i = 0; i < ripples.length; i += 1) {
      const ripple = ripples[i];
      flat[i * 4 + 0] = ripple.x;
      flat[i * 4 + 1] = ripple.y;
      flat[i * 4 + 2] = ripple.t;
      flat[i * 4 + 3] = ripple.strength;
    }
    gl.uniform4fv(uRipples, flat);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    if (!reduceMotion) requestAnimationFrame(render);
  }

  if (reduceMotion) {
    clearInterval(ambientInterval);
    render();
  } else {
    requestAnimationFrame(render);
  }
})();
