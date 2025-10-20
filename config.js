
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
console.log (createClient);

const supaBaseURL = "https://njkujgyrnopzyriirmoi.supabase.co";
const supaBaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qa3VqZ3lybm9wenlyaWlybW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MzQyOTUsImV4cCI6MjA3NjMxMDI5NX0.J3NsnRpwYI2T0e4YIK5kooK5g7GobYNS_11fDz_XR3g";

const supaBase = createClient('https://njkujgyrnopzyriirmoi.supabase.co' , 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qa3VqZ3lybm9wenlyaWlybW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MzQyOTUsImV4cCI6MjA3NjMxMDI5NX0.J3NsnRpwYI2T0e4YIK5kooK5g7GobYNS_11fDz_XR3g');

export default supaBase;

