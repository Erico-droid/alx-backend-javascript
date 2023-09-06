export default function guardrail(mathFunction) {
  const queue = []; // empty queue
  try {
    const resv = mathFunction();
    queue.push(resv); // pushing result of math func to queue
  } catch (err) {
    queue.push(err.toString()); // appending err to queue
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue; // returning array queue
}
