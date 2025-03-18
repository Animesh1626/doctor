"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Building,
  GraduationCap,
  MapPin,
  Plus,
  Save,
  Trash2,
  User
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import toast from "react-hot-toast"

const profileFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  title: z.string().min(2, { message: "Title is required." }),
  specialty: z.string().min(2, { message: "Specialty is required." }),
  bio: z.string().min(50, { message: "Bio must be at least 50 characters." }),
  clinicName: z.string().min(2, { message: "Clinic name is required." }),
  address: z.string().min(5, { message: "Address is required." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State is required." }),
  zipCode: z.string().min(5, { message: "Zip code is required." }),
  phone: z.string().min(10, { message: "Valid phone number is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  workingHours: z.string().min(2, { message: "Working hours are required." })
})

export default function DoctorProfileForm() {
  const router = useRouter()
  const [specializations, setSpecializations] = useState([])
  const [newSpecialization, setNewSpecialization] = useState("")
  const [languages, setLanguages] = useState([])
  const [newLanguage, setNewLanguage] = useState("")
  const [educationEntries, setEducationEntries] = useState([
    { degree: "", institution: "", year: "" }
  ])
  const [experienceEntries, setExperienceEntries] = useState([
    {
      position: "",
      institution: "",
      startYear: "",
      endYear: "",
      description: ""
    }
  ])
  const [imagePreview, setImagePreview] = useState(null)

  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      title: "Dr.",
      specialty: "",
      bio: "",
      clinicName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      email: "",
      workingHours: "Monday - Friday, 9:00 AM - 5:00 PM"
    }
  })

  function onSubmit(data) {
    // In a real application, you would send this data to your backend
    console.log({
      ...data,
      specializations,
      languages,
      education: educationEntries,
      experience: experienceEntries,
      profileImage: imagePreview
    })

    toast.success("Profile Updated");

    // Redirect to the doctor's dashboard or profile view
    // router.push('/doctor/dashboard')
  }

  function handleImageUpload(event) {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  function addSpecialization() {
    if (newSpecialization && !specializations.includes(newSpecialization)) {
      setSpecializations([...specializations, newSpecialization])
      setNewSpecialization("")
    }
  }

  function removeSpecialization(item) {
    setSpecializations(specializations.filter(i => i !== item))
  }

  function addLanguage() {
    if (newLanguage && !languages.includes(newLanguage)) {
      setLanguages([...languages, newLanguage])
      setNewLanguage("")
    }
  }

  function removeLanguage(item) {
    setLanguages(languages.filter(i => i !== item))
  }

  function addEducation() {
    setEducationEntries([
      ...educationEntries,
      { degree: "", institution: "", year: "" }
    ])
  }

  function updateEducation(index, field, value) {
    const updated = [...educationEntries]
    updated[index] = { ...updated[index], [field]: value }
    setEducationEntries(updated)
  }

  function removeEducation(index) {
    setEducationEntries(educationEntries.filter((_, i) => i !== index))
  }

  function addExperience() {
    setExperienceEntries([
      ...experienceEntries,
      {
        position: "",
        institution: "",
        startYear: "",
        endYear: "",
        description: ""
      }
    ])
  }

  function updateExperience(index, field, value) {
    const updated = [...experienceEntries]
    updated[index] = { ...updated[index], [field]: value }
    setExperienceEntries(updated)
  }

  function removeExperience(index) {
    setExperienceEntries(experienceEntries.filter((_, i) => i !== index))
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
        <p className="text-muted-foreground mb-8">
          Please fill in your professional details to complete your doctor
          profile.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Profile Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profile Image
                </CardTitle>
                <CardDescription>
                  Upload a professional photo for your profile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden bg-muted flex items-center justify-center border">
                    {imagePreview ? (
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Profile Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="h-20 w-20 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <Label htmlFor="profile-image">Upload your photo</Label>
                    <Input
                      id="profile-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <p className="text-sm text-muted-foreground">
                      Recommended: Square image, at least 300x300 pixels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Enter your basic personal and professional information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select title" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Dr.">Dr.</SelectItem>
                            <SelectItem value="Prof.">Prof.</SelectItem>
                            <SelectItem value="Assoc. Prof.">
                              Assoc. Prof.
                            </SelectItem>
                            <SelectItem value="Mr.">Mr.</SelectItem>
                            <SelectItem value="Mrs.">Mrs.</SelectItem>
                            <SelectItem value="Ms.">Ms.</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specialty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Specialty</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select specialty" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Cardiology">Cardiology</SelectItem>
                          <SelectItem value="Dermatology">
                            Dermatology
                          </SelectItem>
                          <SelectItem value="Endocrinology">
                            Endocrinology
                          </SelectItem>
                          <SelectItem value="Gastroenterology">
                            Gastroenterology
                          </SelectItem>
                          <SelectItem value="Neurology">Neurology</SelectItem>
                          <SelectItem value="Obstetrics & Gynecology">
                            Obstetrics & Gynecology
                          </SelectItem>
                          <SelectItem value="Oncology">Oncology</SelectItem>
                          <SelectItem value="Ophthalmology">
                            Ophthalmology
                          </SelectItem>
                          <SelectItem value="Orthopedics">
                            Orthopedics
                          </SelectItem>
                          <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="Psychiatry">Psychiatry</SelectItem>
                          <SelectItem value="Urology">Urology</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Label>Specializations</Label>
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {specializations.map((item, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => removeSpecialization(item)}
                          className="ml-1 rounded-full hover:bg-muted p-1"
                        >
                          <Trash2 className="h-3 w-3" />
                          <span className="sr-only">Remove {item}</span>
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add specialization"
                      value={newSpecialization}
                      onChange={e => setNewSpecialization(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={addSpecialization}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add specialization</span>
                    </Button>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write a brief description of your professional background, expertise, and approach to patient care..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This will be displayed on your public profile.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Label>Languages</Label>
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {languages.map((item, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => removeLanguage(item)}
                          className="ml-1 rounded-full hover:bg-muted p-1"
                        >
                          <Trash2 className="h-3 w-3" />
                          <span className="sr-only">Remove {item}</span>
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add language"
                      value={newLanguage}
                      onChange={e => setNewLanguage(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={addLanguage}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add language</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Education
                </CardTitle>
                <CardDescription>
                  Add your educational background and qualifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {educationEntries.map((entry, index) => (
                  <div key={index} className="space-y-4">
                    {index > 0 && <Separator />}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`degree-${index}`}>
                          Degree/Certification
                        </Label>
                        <Input
                          id={`degree-${index}`}
                          value={entry.degree}
                          onChange={e =>
                            updateEducation(index, "degree", e.target.value)
                          }
                          placeholder="MD, PhD, Board Certification, etc."
                        />
                      </div>
                      <div>
                        <Label htmlFor={`institution-${index}`}>
                          Institution
                        </Label>
                        <Input
                          id={`institution-${index}`}
                          value={entry.institution}
                          onChange={e =>
                            updateEducation(
                              index,
                              "institution",
                              e.target.value
                            )
                          }
                          placeholder="University or Institution Name"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-4">
                      <div className="flex-1">
                        <Label htmlFor={`year-${index}`}>Year</Label>
                        <Input
                          id={`year-${index}`}
                          value={entry.year}
                          onChange={e =>
                            updateEducation(index, "year", e.target.value)
                          }
                          placeholder="Year of completion or range (e.g., 2010-2014)"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeEducation(index)}
                        disabled={educationEntries.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove education entry</span>
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={addEducation}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Education Entry
                </Button>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5" />
                  Work Experience
                </CardTitle>
                <CardDescription>
                  Add your professional work experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {experienceEntries.map((entry, index) => (
                  <div key={index} className="space-y-4">
                    {index > 0 && <Separator />}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`position-${index}`}>Position</Label>
                        <Input
                          id={`position-${index}`}
                          value={entry.position}
                          onChange={e =>
                            updateExperience(index, "position", e.target.value)
                          }
                          placeholder="Position or Title"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`institution-exp-${index}`}>
                          Institution/Hospital
                        </Label>
                        <Input
                          id={`institution-exp-${index}`}
                          value={entry.institution}
                          onChange={e =>
                            updateExperience(
                              index,
                              "institution",
                              e.target.value
                            )
                          }
                          placeholder="Institution or Hospital Name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`start-year-${index}`}>
                          Start Year
                        </Label>
                        <Input
                          id={`start-year-${index}`}
                          value={entry.startYear}
                          onChange={e =>
                            updateExperience(index, "startYear", e.target.value)
                          }
                          placeholder="Start Year"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`end-year-${index}`}>End Year</Label>
                        <Input
                          id={`end-year-${index}`}
                          value={entry.endYear}
                          onChange={e =>
                            updateExperience(index, "endYear", e.target.value)
                          }
                          placeholder="End Year or 'Present'"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-4">
                      <div className="flex-1">
                        <Label htmlFor={`description-${index}`}>
                          Description
                        </Label>
                        <Textarea
                          id={`description-${index}`}
                          value={entry.description}
                          onChange={e =>
                            updateExperience(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Brief description of your responsibilities and achievements"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeExperience(index)}
                        disabled={experienceEntries.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove experience entry</span>
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={addExperience}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Experience Entry
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Practice Information
                </CardTitle>
                <CardDescription>
                  Enter your practice location and contact details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="clinicName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Clinic/Hospital Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Medical Center Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Medical Plaza" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl>
                          <Input placeholder="Zip Code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="doctor@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="workingHours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Working Hours</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Monday - Friday, 9:00 AM - 5:00 PM"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                Save Profile
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
