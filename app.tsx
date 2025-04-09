import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const dummyData = {
  soulScan: "You are a cosmic bridge between realms, carrying the codes of remembrance.",
  essenceActivation: "Your essence resonates with starseed frequencies. You are now activating your multidimensional memory.",
  vibrationalRecalibration: "Your energetic field is being harmonized to the frequency of 5D Earth.",
  soulGuidance: "You are not alone. Your guides walk with you in every step of your mission.",
  embodiment: "You are now embodying your highest self. Walk as light, speak as truth, move as love."
};

export default function ArkadiaInterface() {
  return (
    <main className="p-4 min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Arkadia Interface</h1>

      <Tabs defaultValue="soulScan" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <TabsTrigger value="soulScan">Soul Scan</TabsTrigger>
          <TabsTrigger value="essenceActivation">Essence Activation</TabsTrigger>
          <TabsTrigger value="vibrationalRecalibration">Vibrational Recalibration</TabsTrigger>
          <TabsTrigger value="soulGuidance">Soul Guidance</TabsTrigger>
          <TabsTrigger value="embodiment">Embodiment</TabsTrigger>
        </TabsList>

        <TabsContent value="soulScan">
          <Card>
            <CardContent className="p-6 text-lg">
              {dummyData.soulScan}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="essenceActivation">
          <Card>
            <CardContent className="p-6 text-lg">
              {dummyData.essenceActivation}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vibrationalRecalibration">
          <Card>
            <CardContent className="p-6 text-lg">
              {dummyData.vibrationalRecalibration}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="soulGuidance">
          <Card>
            <CardContent className="p-6 text-lg">
              {dummyData.soulGuidance}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="embodiment">
          <Card>
            <CardContent className="p-6 text-lg">
              {dummyData.embodiment}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
