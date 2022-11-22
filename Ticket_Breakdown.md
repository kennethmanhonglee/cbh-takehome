# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Create helper table to hold each facilities' customID for each agent. 
  - In order to allow facilities to have custom ID's for each agents, we must store these custom ID's in our database. Creating a helper table will allow each facility to store a custom ID for each agent that they work with if they desire. 
  - Acceptance Criteria:
    - Create FacilityAgentsCustomID table
    - The table must contain facility_id, agent_id, agent_custom_id as columns. 
  - Time / Effort Estimates:
    - 3 points
    - Likely take a couple of days to create a table
  - Implementation details:
    - Create a table using ORM / SQL, depending on the tech stack.

2. Update API's to support facilities' customID for each agent.
  - Once a table has been created in the database to support custom ID's for each facilities for each agents, update the backend API to support a new parameter - the customID.
  - Acceptance Criteria:
    - Create / update agents API's must support a customID that is nullable. 
    - Create / update agnets API's must update the databse with the customID.
  - Time / Effort Estimates:
    - 5 points
    - Likely take a week to change the API's and their unit / integration tests.
  - Implementation details:
    - Change create agent API to accept custom ID
    - Change update agent API to accept custom ID
    - Update unit / integration tests

3. Update frontend create agent component to allow facility managers to input customID.
  - Once the API has been updated to support customID's for agents at each facility, update the create agent form in the frontend to allow for creation of new agents with a customID.
  - Acceptance Criteria:
    - Agent creation must allow an input for a customID.
    - Submitting the form with a custom ID must create an agent with a custom ID for this facility only. 
    - Submitting the form without a custom ID must create an agent without a custom ID for this facility.
  - Time / Effort Estimates:
    - 5 points
    - Will need to update the input component, but also update the automated tests to test for the new input.
  - Implementation details:
    - The custom ID for a new agent creation must be optional.

4. Update frontend update agent component to allow facility managers to input custom ID.
  - Once the API has been updated to support customID's for agents at each facility, update the update agent form in the frontend to allow for updating agents with a customID.
  - Acceptance Criteria:
    - Agent update must allow an input for a customID.
    - Submitting the form with a custom ID must udpate the agent with a custom ID for this facility only. 
    - Submitting the form without a custom ID must update the agent to not have a custom ID for this facility.
  - Time / Effort Estimates:
    - 5 points
    - Will need to update the input component, but also update the automated tests to test for the new input.
  - Implementation details:
    - The custom ID for a new agent update must be optional.